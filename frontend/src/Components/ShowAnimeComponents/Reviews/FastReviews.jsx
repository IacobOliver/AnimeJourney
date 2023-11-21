import React, { useEffect, useState } from "react";
import Review from "./Review";
import { Button } from "@material-tailwind/react";
import { useAtom } from "jotai";
import state from "../../Atom";
import { useNavigate, useParams } from "react-router-dom";
import BackgroundHolder from "../../BackgroundHolder";
import WriteReview from "./WriteReview";

export default function FastReviews() {
    const [refresh, setRefresh] = useAtom(state.refreshAnime);
    const [reviews, setReviewes] = useState(null);

    const [isLoggedIn, setIsLoggedIn] = useAtom(state.isLoggedIn);
    const [user, setUser] = useAtom(state.user)

    const [writeReview, setwriteReview] = useState(false);
    const [reviewContent, setReviewContent] = useState("")
    const [editReviewId, setEditReviewId] = useState(null);

    const params = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/reviews/get?animeId=${params.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviewes(data);
            })
    }, [refresh])


    const writeAReviewEvent = () => {
        !isLoggedIn ? navigate("/login") : (setwriteReview(true), setReviewContent(""));
    }

    const handlePost = (messageRef) => {
        if (messageRef.current.value.length > 0) {
            let body = {
                "jikanAnimeId": params.id,
                "user": { id: user.id },
                // "image": "nmk",
                "message": messageRef.current.value,
                "publishDate": new Date().toDateString(),
                "likes": 0
            }

            fetch(`http://localhost:8080/reviews`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setReviewes([...reviews, data])
                })
        }
    }


    const handleUpdate = (messageRef) => {
        fetch(`http://localhost:8080/reviews?reviewId=${editReviewId}&contentReview=${messageRef.current.value}&currentDate=${new Date().toDateString()}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRefresh(refresh + 1)
            })
    }


    return (
        <div className=" col-span-2 px-3 ">
            <div className="flex">
                <p className="col-span-4 text-2xl sm:text-3xl font-fantasy ml-3"> Reviews</p>

                <Button onClick={writeAReviewEvent} variant="text" className="flex items-center gap-2 text-forth_color_theme   ml-3 duration-300  font-bold tracking-wide text-sm py-2 px-3 border-b border-b-transparent hover:border-b-forth_color_theme rounded-none ">
                    Write a review
                </Button>
            </div>

            {reviews && reviews.map((review, index) => <Review key={index} review={review} loggedUserID={user ? user.id : ""} setReviewContent={setReviewContent} setwriteReview={setwriteReview} setEditReviewId={setEditReviewId} />)}


            <Button variant="text" className="flex items-center gap-2 text-black_first_theme bg-forth_color_theme hover:bg-third_color_theme hover:text-fifth_color_theme ml-3 duration-300 font-fantasy font-normal tracking-wide text-sm sm:text-lg py-2 px-3">
                See more
                <i className="fa-solid fa-arrow-right"></i>
            </Button>

            {writeReview && reviews !== undefined ? <BackgroundHolder
                closeEvent={() => setwriteReview(false)}
                content={<WriteReview
                    closeEvent={() => setwriteReview(false)}
                    handlePost={handlePost}
                    handleUpdate={handleUpdate}
                    reviewContent={reviewContent}
                />}
            />
                : <></>
            }

        </div>
    )
}