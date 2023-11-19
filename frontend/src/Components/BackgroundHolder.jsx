import React from "react";

export default function BackgroundHolder({ lateralColumns, closeEvent, content }) {
    let middleColumn = 12 - lateralColumns

    return (
        <div className={`grid grid-cols-12 bg-[rgba(0,0,0,0.7)] backdrop-blur-sm w-screen h-screen fixed left-0 top-0 z-50`}>
            <div onClick={closeEvent} className={`  col-span-${lateralColumns / 2}`}></div>

            <div className={`col-span-${middleColumn} flex items-center justify-center`}>
               {content}
            </div>

            <div onClick={closeEvent} className={`  col-span-${lateralColumns / 2}`}></div>

        </div>
    )
}