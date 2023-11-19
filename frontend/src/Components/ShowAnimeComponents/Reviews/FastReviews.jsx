import React, { useEffect, useState } from "react";
import Review from "./Review";
import { Button } from "@material-tailwind/react";
import { useAtom } from "jotai";
import state from "../../Atom";
import { useNavigate, useParams } from "react-router-dom";

export default function FastReviews() {
    const [refresh , setRefresh] = useAtom(state.refreshAnime);
    const [reviews, setReviewes] = useState(null);

    const [isLoggedIn, setIsLoggedIn] = useAtom(state.isLoggedIn);

     const params = useParams()
     const navigate = useNavigate();

    useEffect(() =>{
        fetch(`http://localhost:8080/reviews?animeId=${params.id}`, {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setReviewes(data);
        })
    },[refresh])


    const writeAReviewEvent = () =>{
       if(!isLoggedIn){
         navigate("/login")
       }else{
        fetch(`http://localhost:8080/reviews`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${localStorage.getItem("token")}`
            },
            body : JSON.stringify({
                "jikanAnimeId" : 20,
                "image" : "nmk",
                "username" : "oli",
                "message" : "masterpiece anime",
                "publishDate" : "Sun Nov 19 2023",
                "likes" : 2040
            })
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setReviewes([...reviews, data])
        })
       }
    }

    return (
        <div className=" col-span-2 px-3 ">
            <div className="flex">
            <p className="col-span-4 text-2xl sm:text-3xl font-fantasy ml-3"> Reviews</p>
            
            <Button onClick={writeAReviewEvent} variant="text" className="flex items-center gap-2 text-forth_color_theme   ml-3 duration-300  font-bold tracking-wide text-sm py-2 px-3 border-b border-b-transparent hover:border-b-forth_color_theme rounded-none ">
                Write a review
            </Button>
            </div>

            {reviews && reviews.map((review, index) => <Review key={index} image={review.image} userName={review.username} comment={review.message} date={review.publishDate} likes={review.likes}/>)}

            <Review userName={"olii"} comment="This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights." />
            <Review userName={"Andreiutu"} comment="Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!" />
            <Review userName={"luffy "} comment="I love how versatile this bag is. It can hold anything ranging from cookies that come in trays to cookies that come in tins." />
            <Review userName={"oljojoii"} comment="I love how versatile this bag is. It can hold anything ranging from cookies that come in trays to cookies that come in tins." />



            <Button  variant="text" className="flex items-center gap-2 text-black_first_theme bg-forth_color_theme hover:bg-third_color_theme hover:text-fifth_color_theme ml-3 duration-300 font-fantasy font-normal tracking-wide text-sm sm:text-lg py-2 px-3">
                See more
                <i className="fa-solid fa-arrow-right"></i>
            </Button>

        </div>
    )
}