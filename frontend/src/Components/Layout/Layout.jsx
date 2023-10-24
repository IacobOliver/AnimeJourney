import React from "react";

import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useAtom } from "jotai";
import state from "../Atom"
import ProfileDropdown from "./ProfileDropdown";
import { Utils } from "../Utils";



export default function Layout() {
    const [items, setItems] = useState([])
    const [refresh, setRefresh] = useAtom(state.refreshAnime)
    const [isLoggedIn, setIsLoggedIn] = useAtom(state.isLoggedIn)
    const [play, setPlay] = useAtom(state.play);
    const [mute, setMute] = useAtom(state.mute)
    const [user, setUser] = useAtom(state.user)

   

    const navigate = useNavigate();

    useEffect(() => {
        if(!isLoggedIn){
        Utils.logInWithToken({setUser, setIsLoggedIn});
        console.log("autoLogin")
        }
    }, [])


    const handleOnSearch = (string, results) => {
        fetch(`https://api.jikan.moe/v4/anime?q=${string}&sfw=true`)
            .then(res => res.json())
            .then(data => {
                setItems(data.data)
            })

    }

    const handleOnHover = (result) => {
        console.log(result)
    }

    const handleOnSelect = (item) => {
        setRefresh(refresh + 1)
        setPlay(true)
        setMute(false)
        navigate(`/anime/${item.mal_id}`)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (anime) => {
        return (
            <div className="h-16 my-1 px-2 rounded-lg flex group-hover relative z-40">

                <div className="h-full w-16 rounded-lg bg-center bg-cover p-2" style={{ backgroundImage: `url(${anime.images.jpg.image_url})` }}></div>

                <div className="text-fifth_color_theme  text-left text-lg  w-72 mx-2 mt-1 ">
                    <div className=" line-clamp-1 font-fantasy tracking-wide truncate">{anime.title}</div>

                    <div className=" text-gray-500 text-xs h-1/2 text-left mt-1 flex items-center font-bold">
                        <p>{anime.type}</p>
                        <p className="mx-2 text-lg">•</p>
                        <i className="fa-solid fa-star text-forth_color_theme"></i>
                        <p>{anime.score} </p>
                        <p className="mx-2 text-lg">•</p>
                        <p> {anime.aired.string.split("to")[0]}</p>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="flex justify-center w-screen h-16 rounded-xl py-2 z-10">
            <div className="flex items-center w-9,9/10 h-16 rounded-xl bg-black_second_theme justify-between">


                <div className="flex items-center h-full w-3/4 py-2">
                    <div className="text-third_color_theme ml-7 mr-10">
                        <i
                            className="fas fa-bars text-tc2 text-2xl relative -mr-2 "
                            aria-label="hamburger"
                            id="hamburger"
                        ></i>
                    </div>


                    <div className="h-full py-1 mr-4 cursor-pointer" onClick={() => navigate("/home")}>
                        <img draggable="false" className="h-full" src="\public\animejourney-low-resolution-logo-color-on-transparent-background.png" />
                    </div>

                    <div className="bg-black_first_theme text-third_color_theme w-2/5 h-full mx-7 rounded-2xl flex items-center">
                        <i onClick={(e) => e.target.nextSibling.firstChild.firstChild.firstChild.focus()} className="fa-solid fa-magnifying-glass mx-4 text-xl"></i>
                        <ReactSearchAutocomplete
                            items={items}
                            onSearch={handleOnSearch}
                            onHover={handleOnHover}
                            onSelect={handleOnSelect}
                            onFocus={handleOnFocus}
                            formatResult={formatResult}
                            maxResults="5"
                            showIcon={false}
                            resultStringKeyName="title"
                            fuseOptions={{ keys: ["title", "title_english"] }}
                            placeholder="Search anime... "
                            className=" rounded-xl w-full z-40"
                            styling={{
                                backgroundColor: "black",
                                border: "0px",
                                fontSize: "medium",
                                color: "#E2E5DE",
                                position: "relative",
                                hoverBackgroundColor: "#292929",
                            }}
                        />
                    </div>
                </div>


                <div className="flex items-center h-full w-1/4 justify-end">
                    {isLoggedIn ? <ProfileDropdown />
                        :

                        <button onClick={() => navigate("/logIn")} className="relative inline-flex items-center justify-center mr-2 overflow-hidden font-medium rounded-lg group 
                                bg-gradient-to-br from-orange-500 to-red-600 group-hover:from-orange-500 group-hover:to-red-600
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