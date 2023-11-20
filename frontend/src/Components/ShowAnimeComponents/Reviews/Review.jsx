import React, { useRef, useState } from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";


export default function Review({reviewId, userName, userId, comment, image, date, likes }) {
    const [likeReview, setLikeReview] = useState(0);
    const reviewRef = useRef(null)

    let imageIndex = Math.floor(Math.random() * 10 + 1)
    let currentDate = new Date()


    const deleteReview = () =>{
        reviewRef.current.remove()
        fetch(`http://localhost:8080/reviews?reviewId=${reviewId}`, {
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        }).catch(err => console.log(err))
    }

    return (
        <div ref={reviewRef} id={userId} className="w-full my-5 font-semibold">

            <div id="userInfoAndImage" className="flex items-center justify-between">
                <div className="flex">
                    <img className="h-14 w-14 rounded-full" src={`${image ? image : `/icons/${imageIndex}.jpg`} `} />

                    <div className="flex flex-col ml-2">
                        <p className="text-xl">{userName}</p>
                        <p className="text-sm text-gray-500">{date ? date : currentDate.toDateString()}</p>
                    </div>

                    <div className="flex items-center ml-3 cursor-pointer">
                        <Menu>
                            <MenuHandler>
                            <i class="fa-solid fa-pen"></i>
                            </MenuHandler>
                            <MenuList className=" bg-black_second_theme bg-opacity-40 backdrop-blur-md border-0 text-fifth_color_theme">
                                <MenuItem id={reviewId} onClick={deleteReview}><i class="fa-solid fa-trash-can"/> Delete</MenuItem>
                                <MenuItem><i class="fa-solid fa-pen-to-square"/> Edit</MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                </div>

                <div className="duration-300 hover:text-red-500 flex flex-col items-center cursor-pointer" onClick={() => setLikeReview(likeReview + 1)}>
                    <div className="flex relative">
                        <i className={`fa-regular fa-heart ${likeReview % 2 !== 0 ? "text-red-500" : ""}`} />
                        {likeReview % 2 !== 0 ? <i className="fa-solid fa-heart text-red-500 absolute animate-jump-in" /> : <></>}
                    </div>
                    <p>{likes ? likes : likeReview}</p>
                </div>
            </div>

            <p className="py-3 px-3">
                {comment}
            </p>




        </div>
    )
}