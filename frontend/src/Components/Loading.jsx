import React from "react";

export default function Loading(){


    return(
        <div className="w-full flex flex-col items-center relative">
            <img draggable="false" className="" src="\public\freeSkull5.gif"/>
            <span className="loading loading-dots loading-lg absolute bottom-0 mb-24"></span>
        </div>
    )
}