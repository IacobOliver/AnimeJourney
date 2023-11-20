import React, { useRef, useState } from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";


export default function Review({ review, userName, loggedUserID, setWriteComment, setReviewContent }) {
    const [likeReview, setLikeReview] = useState(0);
    const reviewRef = useRef(null)
    const textReviewRef = useRef(null)

    let imageIndex = Math.floor(Math.random() * 10 + 1)
    let currentDate = new Date()


    const deleteReview = () => {
        reviewRef.current.remove()
        fetch(`http://localhost:8080/reviews?reviewId=${review.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            }).catch(err => console.log(err))
    }

    const onEditEvent = () =>{
        setWriteComment(true)
        setReviewContent(textReviewRef.current.textContent)
    }

    return (
        <div ref={reviewRef} className="w-full my-5 font-semibold">

            <div id="userInfoAndImage" className="flex items-center justify-between">
                <div className="flex">
                    <img className="h-14 w-14 rounded-full" src={`${review ? review.image : `/icons/${imageIndex}.jpg`} `} />

                    <div className="flex flex-col ml-2">
                        <p className="text-xl">{review ? review.user.memberName : userName}</p>
                        <p className="text-sm text-gray-500">{review ? review.publishDate : currentDate.toDateString()}</p>
                    </div>

                    {(review && (review.user.id == loggedUserID)) &&
                        <div className="flex items-center ml-3 cursor-pointer">
                            <Menu>
                                <MenuHandler>
                                    <i className="fa-solid fa-pen"></i>
                                </MenuHandler>
                                <MenuList className=" bg-black_second_theme bg-opacity-40 backdrop-blur-md border-0 text-fifth_color_theme">
                                    <MenuItem onClick={deleteReview}><i className="fa-solid fa-trash-can" /> Delete</MenuItem>
                                    <MenuItem onClick={onEditEvent}><i className="fa-solid fa-pen-to-square" /> Edit</MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                    }
                </div>

                <div className="duration-300 hover:text-red-500 flex flex-col items-center cursor-pointer" onClick={() => setLikeReview(likeReview + 1)}>
                    <div className="flex relative">
                        <i className={`fa-regular fa-heart ${likeReview % 2 !== 0 ? "text-red-500" : ""}`} />
                        {likeReview % 2 !== 0 ? <i className="fa-solid fa-heart text-red-500 absolute animate-jump-in" /> : <></>}
                    </div>
                    <p>{review ? review.likes : likeReview}</p>
                </div>
            </div>

            <p ref={textReviewRef} className="py-3 px-3">
                {review ? review.message : ""}
            </p>




        </div>
    )
}