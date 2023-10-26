import React from "react";
import {
    Tooltip, Popover,
    PopoverHandler,
    PopoverContent,
    Button
} from "@material-tailwind/react";

import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import state from "../Atom"
import ProfileDropdown from "./ProfileDropdown";
import { Utils } from "../Utils";
import Search from "./Search";



export default function Layout() {
    const [items, setItems] = useState([])
    const [refresh, setRefresh] = useAtom(state.refreshAnime)
    const [isLoggedIn, setIsLoggedIn] = useAtom(state.isLoggedIn)
    const [play, setPlay] = useAtom(state.play);
    const [mute, setMute] = useAtom(state.mute)
    const [user, setUser] = useAtom(state.user)

    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            Utils.logInWithToken({ setUser, setIsLoggedIn });
            console.log("autoLogin")
        }
    }, [])


    return (
        <div className="flex justify-center w-screen h-16 rounded-xl py-2 z-10">
            <div className="flex items-center w-9,9/10 h-16 rounded-xl bg-black_second_theme justify-between">

                <div className="flex items-center h-full w-3/4 py-2">
                    <div className=" flex items-center text-third_color_theme ml-3 mr-3 sm:ml-7 sm:mr-10">
                        <i
                            className="fas fa-bars text-tc2 text-lg sm:text-2xl relative  "
                            aria-label="hamburger"
                            id="hamburger"
                        ></i>
                    </div>

                    <div className="h-auto py-1 w-[13rem] sm:h-full sm:w-auto lg:mr-4 cursor-pointer" onClick={() => navigate("/home")}>
                        <img draggable="false" className="h-full" src="\public\animejourney-low-resolution-logo-color-on-transparent-background.png" />
                    </div>

                    <Search costumClass={" hidden lg:!visible lg:!flex"}/>
                </div>

                <div className="grid grid-cols-2 h-full items-center">
                    <Popover
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                        }}
                        placement="bottom-end"
                        offset={12}
                    >
                        <Tooltip content="Search" placement="left-end" >
                            <PopoverHandler>
                                <div className="text-md sm:text-xl group-hover:text-third_color_theme w-10 h-10 ml-5 sm:ml-10 group hover:bg-black rounded-full flex items-center justify-center col-span-1 lg:grid-cols-none lg:hidden"> <i className="fa-solid fa-magnifying-glass  "></i></div>
                            </PopoverHandler>
                        </Tooltip>
                        <PopoverContent className="w-screen bg-[rgba(0,0,0,0.8)] backdrop-blur-md z-40 border-0">
                           <Search  costumClass={""}/>
                        </PopoverContent>
                    </Popover>

                    {isLoggedIn ? <ProfileDropdown />
                        :
                        <button onClick={() => navigate("/logIn")} className="relative inline-flex items-center justify-center mr-2 overflow-hidden font-medium rounded-lg group 
                                bg-gradient-to-br from-orange-500 to-red-600 group-hover:from-orange-500 group-hover:to-red-600
                                col-span-1
                                 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 text-black_first_theme text-md ">
                            <span className=" flex items-center relative px-5 py-1.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 bg-forth_color_theme font-medium">
                                <p aria-disabled="true"> Sign in </p>
                                <i className="fa-solid fa-arrow-right-to-bracket ml-2 text-xl"></i>
                            </span>
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}