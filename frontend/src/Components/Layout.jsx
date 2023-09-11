import React from "react";

export default function Layout() {
    return (
        <div className="flex justify-center w-screen h-14 rounded-xl py-1 ">
            <div className="flex items-center w-9,9/10 h-14 rounded-xl bg-black_second_theme justify-between">


                <div className="flex items-center h-full w-3/4">
                <div className="text-third_color_theme ml-7 mr-10">
                    <i
                        className="fas fa-bars text-tc2 text-2xl relative -mr-2 "
                        aria-label="hamburger"
                        id="hamburger"
                    ></i>
                </div>

                <div className="h-5/6">
                    <img className="h-full" src="\public\animejourney-low-resolution-logo-color-on-transparent-background.png" />
                </div>

                <div className="bg-black_first_theme text-third_color_theme w-2/5 h-5/6 mx-7 rounded-2xl flex items-center">
                    <i class="fa-solid fa-magnifying-glass mx-4 text-xl"></i>
                    <input placeholder="Search anime..." className="text-fifth_color_theme text-sm h-full bg-black_first_theme rounded-xl w-full focus:outline-none"></input>
                </div>
                </div>
               

                <div className="flex items-center h-full w-1/4 justify-end">
                <button class="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden font-medium rounded-lg group 
                                bg-gradient-to-br from-orange-500 to-red-600 group-hover:from-orange-500 group-hover:to-red-600
                                 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 text-black_first_theme text-md ">
                    <span class=" flex items-center relative px-5 py-1.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 bg-forth_color_theme font-medium">
                       <p> Sign in </p>
                        <i class="fa-solid fa-arrow-right-to-bracket ml-2 text-xl"></i>
                    </span>  
                </button>
                </div>

            </div>

        </div>
    )
}