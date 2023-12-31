import React from "react";
import { useState, useEffect } from "react"
import { Utils } from "../Utils";
import { useNavigate } from "react-router-dom";

export default function UpcomingAnime() {
    const [upcomingAnime, setUpcomingAnime] = useState(null);
    const [nextPage, setNextPage] = useState(1)
    const [last_visible_page, setLast_visible_page] = useState(0)
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/seasons/upcoming?page=${nextPage}`)
            .then(res => res.json())
            .then(data => {
                setLast_visible_page(data.pagination.last_visible_page)
                let random = Utils.giveRandomDistinctIndexes(data.data.length, 10)
                setUpcomingAnime(data.data.filter((anime, index) => random.includes(index)))
            })
    }, [nextPage])

    const moreAnime = () => {

        setNextPage(Math.floor(Math.random() * last_visible_page + 1))
    }

    const AnimeCard = ({ anime }) => {

        return (
            <div className=" h-[4.5rem] px1450:h-16 my-2 rounded-lg flex relative mx-2 xl:mx-0">
                <div className="w-full h-full top-0 left-0 absolute hover:bg-[rgba(0,0,0,0.5)]" onClick={() => navigate(`/anime/${anime.mal_id}`)} />

                {/* <div className="h-full w-16 rounded-lg bg-center bg-cover p-2" style={{ backgroundImage: `url(${anime.images.jpg.image_url})` }}></div> */}
                <img className="rounded-lg min-w-[3rem] max-w-[3.2rem]" src={anime.images.jpg.image_url}/>

                <div className="text-fifth_color_theme font-serif text-left text-md  w-72 mx-2 mt-1 ">
                    <div className=" line-clamp-1 font-fantasy tracking-wide">{anime.title}</div>
                    <p className="  font-semibold text-xs tracking-normal h-1/2 text-left mt-1 ">Release Date ‎ • ‎ {anime.aired.string.split("to")[0]}</p>
                </div>

                <div className="flex flex-col w-28 rounded-t-lg rounded-b-xl ">

                    <p className=" text-fifth_color_theme coolGradient text-sm font-serif font-semibold  h-2/3 flex items-center justify-evenly tracking-widest rounded-lg">
                        {anime.type ? anime.type : "Unknown"}
                    </p>
                </div>
            </div>)
    }

    return (<div className="col-span-10 xl:col-span-4 2xl:col-span-3  max-h-full mt-10 xl:mt-3 ">
        <div className="flex items-center justify-center text-fifth_color_theme font-fantasy tracking-wide bg-[rgb(15,15,15)] rounded-xl">
            <p className="text-2xl p-4">Upcoming Anime</p>
            <button className="p-1 text-lg hover:animate-spin" onClick={moreAnime}><i className="fa-solid fa-arrows-rotate"></i></button>
        </div>

        <div className="grid grid-cols-1 px600:grid-cols-2 xl:!grid-cols-1 px-7 border-l-4 border-l-black_second_theme">
            {upcomingAnime?.map((item, index) => <AnimeCard key={index} anime={item} />)}
        </div>
    </div>)
}