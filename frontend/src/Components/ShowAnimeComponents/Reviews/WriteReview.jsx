import React, { useRef, useState } from "react";
import Review from "./Review";
import { useAtom } from "jotai";
import state from "../../Atom";

export default function WriteReview({ closeEvent, handlePost, handleUpdate, reviewContent }) {
    const [chars, setChars] = useState(0);
    const [user, setUser] = useAtom(state.user);
    const messageRef = useRef(null);

    const postOrSaveEvent = () =>{
        reviewContent == "" ? handlePost(messageRef) : handleUpdate(messageRef);
        closeEvent()
    }



    return (
        <div  className="w-2/4 bg-[rgba(0,0,0,0.9)]  p-4">
            <Review userName={user.memberName} />
            <textarea defaultValue={reviewContent} ref={messageRef} onInput={(e) => setChars(e.target.value.length)} maxLength={2000} autoFocus className="bg-[rgb(20,20,20)] w-full h-[20rem] resize-none rounded-lg focus:ring-0 border-0" placeholder="Write your comment here"></textarea>

            <div className="flex justify-between mb-5 mt-1">
                <div className="flex items-center">
                    <button onClick={postOrSaveEvent} className="cursor-pointer font-semibold overflow-hidden relative border border-forth_color_theme group px-8 py-2 rounded-lg">
                        <span className="relative z-10 text-forth_color_theme group-hover:text-white text-xl duration-500">{reviewContent == "" ? "Post" : "Save"}</span>
                        <span className="absolute w-full h-full bg-forth_color_theme -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                        <span className="absolute w-full h-full bg-forth_color_theme -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                    </button>
                    <button onClick={closeEvent} className="ml-3 text-black_second_theme font-bold hover:text-third_color_theme">Cancel</button>
                </div>
                <p>{chars} / 2000</p>
            </div>
        </div>
    )
}