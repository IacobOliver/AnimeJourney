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
                setUpcomingAnime(data.data.filter((anime,index) => random.includes(index)))
            })
    }, [])

    const AnimeCard = ({anime}) => {
       
        return (
            <div className=" bg-black_second_theme h-16 my-2 rounded-lg flex">
                 <p className=" text-fifth_color_theme font-serif font-semibold text-left text-sm">{anime.type}</p>

                <div className="h-full w-16 rounded-lg bg-center bg-cover p-2" style={{ backgroundImage: `url(${anime.images.jpg.image_url})` }}></div>

                <div className="text-fifth_color_theme ml-3 font-fantasy w-72 flex flex-col ">
                <p className=" text-fifth_color_theme font-serif font-semibold text-left text-md line-clamp-2 tracking-normal">{anime.title}</p>
                </div>
               
                <p className=" text-gray-400 font-serif font-semibold text-left text-xs tracking-normal">{anime.aired.string.split("to")[0]}</p>

            </div>)
    }

    return (<div className="col-span-3 max-h-full">
        <div className="flex items-center justify-center">
            <p className="text-2xl text-fifth_color_theme font-fantasy tracking-wide p-4">Upcoming Anime</p>
        </div>

        <div className="px-7">
            {upcomingAnime?.map((item, index) => <AnimeCard key={index} anime={item}/>)}
        </div>
    </div>)
}