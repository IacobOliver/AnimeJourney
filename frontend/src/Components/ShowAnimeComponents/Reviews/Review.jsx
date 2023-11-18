import React, { useState } from "react";

export default function Review({ userName, comment }) {
    const [likeReview, setLikeReview] = useState(0);


    let currentDate = new Date()

    return (
        <div className="w-full my-5 font-semibold">

            <div id="userInfoAndImage" className="flex items-center justify-between">
                <div className="flex">
                    <img className="h-14 w-14 rounded-full" src={`/icons/0.jpg`} />

                    <div className="flex flex-col ml-2">
                        <p className="text-xl">{userName}</p>
                        <p className="text-sm text-gray-500">{currentDate.toDateString()}</p>
                    </div>
                </div>

                <div className="duration-300 hover:text-red-500 flex flex-col items-center cursor-pointer" onClick={() => setLikeReview(likeReview + 1)}>
                    <div className="flex relative">
                        <i className={`fa-regular fa-heart ${likeReview % 2 !== 0 ? "text-red-500" : ""}`} />
                        {likeReview % 2 !== 0 ? <i className="fa-solid fa-heart text-red-500 absolute animate-jump-in" /> : <></>}
                    </div>
                    <p>100</p>
                </div>
            </div>

            <p className="py-3 px-3">
                {comment}
            </p>

            


        </div>
    )
}