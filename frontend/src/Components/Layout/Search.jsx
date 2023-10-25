import { useAtom } from "jotai";
import React, { useState } from "react";
import state from "../Atom";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useNavigate } from "react-router-dom";


export default function Search({costumClass}){
    const [items, setItems] = useState([])
    const [refresh, setRefresh] = useAtom(state.refreshAnime)
    const [play, setPlay] = useAtom(state.play);
    const [mute, setMute] = useAtom(state.mute)

    const navigate = useNavigate();

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
            <div className={`h-16 my-1 px-2 rounded-lg flex group-hover relative z-40`}>

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


    return(
        <div className={` text-third_color_theme bg-black w-full h-full rounded-2xl flex items-center ${costumClass} lg:w-[27rem] `}>
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
    )
}