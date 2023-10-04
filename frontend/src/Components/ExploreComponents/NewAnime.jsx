import React from "react";
import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import state from "../Atom";

export default function AnimeList() {
    const [animeNewSeasons, setAnimeNewSeasons] = useState(null)
    const [newSeasonPage, setNewSeasonPage] = useState(0.1);
    const [[filter, filterValue], setFilter] = useState(["","All"])

    const [play, setPlay] = useAtom(state.play);
    const [mute , setMute] = useAtom(state.mute)

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/newAnimeSeasons/getAnime`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                page: newSeasonPage,
                numberOfItems: 12,
                filter: filter,
                filterValue : filterValue
            })
        })
            .then(res => res.json())
            .then(data => {
                setAnimeNewSeasons(data)
            })
    }, [newSeasonPage])



    const AnimeCard = ({ image, title, airedFrom, type, animeId }) => {
        return (
            <div className="h-9/10 w-44 rounded-lg flex flex-col relative">
                <div className="w-full h-full top-0 left-0 absolute hover:bg-[rgba(0,0,0,0.5)]"  onClick={() => handleAnimeCardEvent(animeId)}/>
                <div className=" h-60 rounded-t-lg bg-center bg-cover p-2" style={{ backgroundImage: `url(${image})` }}></div>
                <div className="text-gray-400 bg-black_second_theme font-semibold tracking-wide font-serif text-center text-xs mt-0 rounded-b-lg flex justify-around">
                    <div> {airedFrom}</div>
                    <div>•</div>
                    <div>{type}</div>
                </div>

                <div className=" text-fifth_color_theme font-serif font-semibold text-left text-md mx-2 mt-2 line-clamp-2 tracking-normal">
                    {title}
                </div>

            </div>
        )
    }

    const handleAnimeCardEvent = (animeId) =>{
        setPlay(true)
        setMute(false)
        navigate(`/anime/${animeId}`)
    }

    const FilterButton = ({name}) =>{
        return <button onClick={(e) => selectFilter(e.target.textContent)} className={`${filterValue == name ? "bg-black_second_theme text-white" : ""} text-md text-gray-500 hover:text-fifth_color_theme font-fantasy tracking-wide p-3 mx-1 rounded-lg`}>{name}</button>
    } 

    const selectFilter = (fValue) =>{
        if(fValue == "Special"){
            setFilter(["anime_type", "Special"])
            setNewSeasonPage(Math.random())
        }else if(fValue == "ONA"){
            setFilter(["anime_type", "ONA"])
            setNewSeasonPage(Math.random())
        }else if(fValue == "TV"){
            setFilter(["anime_type", "TV"])
            setNewSeasonPage(Math.random())
        }else if(fValue == "Movie"){
            setFilter(["anime_type", "Movie"])
            setNewSeasonPage(Math.random())
        }else if(fValue == "Most Recent"){
            setFilter(["aired_from", "Most Recent"])
            setNewSeasonPage(Math.random())
        }else if(fValue == "All"){
            setFilter(["", "All"])
            setNewSeasonPage(Math.random())
        }
    }

    

    const nextPage = (e) => {
        if (animeNewSeasons.length < 12) {
            return
        }
        setNewSeasonPage(newSeasonPage + 1);
    }

    const previosPage = (e) => {
        if (Math.floor(newSeasonPage) == 0) {
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

                <i onClick={previosPage} className="fa-solid fa-angle-left text-2xl cursor-pointer hover:bg-black_second_theme p-3 rounded-lg h-10 w-10 flex items-center justify-center"></i>
                <i onClick={nextPage} className="fa-solid fa-angle-right text-2xl  cursor-pointer  hover:bg-black_second_theme p-3 rounded-lg  h-10 w-10 flex items-center justify-center"></i>
                </div>

                <div className="flex items-center mr-5">
                <FilterButton name="All"/>
                <FilterButton name="Special"/>
                <FilterButton name="ONA"/>
                <FilterButton name="TV"/>
                <FilterButton name="Movie"/>
                <FilterButton name="Most Recent"/>
                </div>
            </div>


            <div className="h-full w-full grid grid-cols-6 gap-4 mt-2">

                {animeNewSeasons?.map((anime, index) => <AnimeCard key={index} image={anime.image} title={anime.name} airedFrom={anime.airedFrom} type={anime.animeType} animeId={anime.animeId}/>)}

            </div>
        </div>)
}