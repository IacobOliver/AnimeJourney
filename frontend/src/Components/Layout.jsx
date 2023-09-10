import React from "react";

export default function Layout() {
    return (
        <div className="flex justify-center w-screen h-14 rounded-xl py-1 ">
            <div className="flex items-center w-9,9/10 h-14 rounded-xl bg-black_second_theme">

                <div className="text-third_color_theme mx-3">
                    <i
                        className="fas fa-bars text-tc2 text-2xl relative -mr-2 "
                        aria-label="hamburger"
                        id="hamburger"
                    ></i>
                </div>

                <div className = "h-5/6">
                    <img className = "h-full" src="\public\animejourney-low-resolution-logo-color-on-transparent-background.png"/>
                </div>

                <div className="bg-black_first_theme text-third_color_theme w-1/4 h-5/6 mx-3 rounded-2xl flex items-center">
                <i class="fa-solid fa-magnifying-glass mx-4"></i>
                <p className = "text-fifth_color_theme text-sm">Search anime...</p>
                </div>

            </div>

        </div>
    )
}