import React from "react";

export default function BackgroundHolder({ closeEvent, content }) {

    return (
        <div id="holder" onClick={(e) => e.target.id == "holder" ? closeEvent() : null} className="w-screen h-screen top-0 left-0 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm fixed z-10 flex items-center justify-center">
            {content}
        </div>
    )
}