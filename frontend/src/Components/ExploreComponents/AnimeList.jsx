import React from "react";
import { useState, useEffect } from "react"

export default function AnimeList() {
    const [animeNewSeasons, setAnimeNewSeasons] = useState(null)
    // const [refreshForNewSeasons, setRefreshForNewSeasons] = useState(0)
    const [newSeasonPage, setNewSeasonPage] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:8080/newAnimeSeasons/getAnime`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                page: newSeasonPage,
                numberOfItems: 12,
                filter: "none"
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAnimeNewSeasons(data)
            })
    }, [newSeasonPage])


    const AnimeCard = ({ image, title, airedFrom, type }) => {
        return (
            <div className="h-9/10 w-44 rounded-lg flex flex-col">
                <div className=" h-60 rounded-t-lg bg-center bg-cover p-2" style={{ backgroundImage: `url(${image})` }}></div>
                <div className="text-gray-400 bg-black_second_theme font-semibold tracking-wide font-serif text-center text-xs mt-0 rounded-b-lg flex justify-around">
                    <div> {airedFrom}</div>
                    <div>{type}</div>
                </div>

                <div className=" text-fifth_color_theme font-serif font-semibold text-left text-md mx-2 mt-2 line-clamp-2 tracking-normal">
                    {title}
                </div>

            </div>
        )
    }


    const nextPage = (e) => {
        console.log(animeNewSeasons.length)
        if (animeNewSeasons.length < 12) {
            return
        }
        setNewSeasonPage(newSeasonPage + 1);
    }

    const previosPage = () => {
        if (newSeasonPage == 0) {
            console.log("no room ");
            return
        }
        setNewSeasonPage(newSeasonPage - 1);
    }

    return (
        <div className="text-white h-auto col-span-7 p-3">
            <div className="  h-14 flex items-center justify-between">
            <div className="flex items-center">
                <p className="text-2xl text-fifth_color_theme font-fantasy tracking-wide p-4">New Anime Seasons</p>

                <i onClick={previosPage} className="fa-solid fa-angle-left text-2xl cursor-pointer"></i>
                <p className="p-4 text-lg font-fantasy">{newSeasonPage + 1}</p>
                <i onClick={nextPage} className="fa-solid fa-angle-right text-2xl  cursor-pointer"></i>
                </div>

                <div className="flex items-center mr-5">
                <button className="text-md text-gray-500 font-fantasy tracking-wide p-4 focus:text-gray-300">All</button>
                <button className="text-md text-gray-500 font-fantasy tracking-wide p-4 focus:text-gray-300">Special</button>
                <button className="text-md text-gray-500 font-fantasy tracking-wide p-4 focus:text-gray-300">ONA</button>
                <button className="text-md text-gray-500 font-fantasy tracking-wide p-4 focus:text-gray-300">TV</button>
                <button className="text-md text-gray-500 font-fantasy tracking-wide p-4 focus:text-gray-300">Movie</button>
                <button className="text-md text-gray-500 font-fantasy tracking-wide p-4 focus:text-gray-300">Most Recent</button>
                </div>
            </div>


            <div className="h-full w-full grid grid-cols-6 gap-4 mt-2">

                {animeNewSeasons?.map((anime, index) => <AnimeCard key={index} image={anime.image} title={anime.name} airedFrom={anime.airedFrom} type={anime.animeType}/>)}

            </div>
        </div>)
}