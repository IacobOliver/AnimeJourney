import React from "react";
import { useState, useEffect } from "react"
import { Utils } from "../Utils";

export default function UpcomingAnime() {
    const [upcomingAnime, setUpcomingAnime] = useState(null);

    useEffect(() => {
        fetch("https://api.jikan.moe/v4/seasons/upcoming?page=1")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                let random = Utils.giveRandomDistinctIndexes(data.data.length, 9)
                setUpcomingAnime(data.data.filter((anime, index) => random.includes(index)))
            })
    }, [])

    const AnimeCard = ({ anime }) => {

        return (
            <div className="h-16 my-2 rounded-lg flex ">


                <div className="h-full w-16 rounded-lg bg-center bg-cover p-2" style={{ backgroundImage: `url(${anime.images.jpg.image_url})` }}></div>

                {/* <p className=" text-fifth_color_theme font-serif font-semibold text-left text-md w-72 ml-3 mt-1 line-clamp-1">{anime.title}</p> */}
                <div className="text-fifth_color_theme font-serif text-left text-md  w-72 mx-2 mt-1 ">
                    <div className=" line-clamp-1 font-fantasy tracking-wide">{anime.title}</div>
                    <p className="  font-semibold text-xs tracking-normal h-1/2 text-left mt-1 ">Release Date ‎ • ‎ {anime.aired.string.split("to")[0]}</p>
                </div>

                <div className="flex flex-col w-28 rounded-t-lg rounded-b-xl ">

                    <p className=" text-fifth_color_theme coolGradient font-serif font-semibold text-sm h-2/3 flex items-center justify-evenly tracking-widest rounded-lg">
                        <div className="w-3"></div>
                        {anime.type}
                    </p>
                </div>
            </div>)
    }

    return (<div className="col-span-3 max-h-full">
        <div className="flex items-center justify-center">
            <p className="text-2xl text-fifth_color_theme font-fantasy tracking-wide p-4">Upcoming Anime</p>
        </div>

        <div className="px-7">
            {upcomingAnime?.map((item, index) => <AnimeCard key={index} anime={item} />)}
        </div>
    </div>)
}