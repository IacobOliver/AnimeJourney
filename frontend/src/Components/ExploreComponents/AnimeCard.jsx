import React from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import state from "../Atom";


export default function AnimeCard({ image, title, airedFrom, type, animeId }) {
    const [play, setPlay] = useAtom(state.play);
    const [mute, setMute] = useAtom(state.mute)
    const [refresh, setRefresh] = useAtom(state.refreshAnime)
    const navigate = useNavigate();

    const handleAnimeCardEvent = (animeId) => {
        setPlay(true)
        setMute(false)
        setRefresh(refresh + 1)
        navigate(`/anime/${animeId}`)
    }
    console.log(image, title)


    return (
        <div className="rounded-lg flex flex-col relative overflow-hidden max-w-[14rem] min-h-[5rem]">
            <div className="w-full h-full top-0 left-0 absolute hover:bg-[rgba(0,0,0,0.5)]" onClick={() => handleAnimeCardEvent(animeId)} />
            <img className="min-h-[9rem]" src = {image}/>
            <div className="text-gray-400 bg-black_second_theme font-semibold tracking-wide font-serif text-center text-xs mt-0 rounded-b-lg flex justify-around">
                <div> {airedFrom}</div>
                <div>•</div>
                <div>{type}</div>
            </div>

            <div className=" text-fifth_color_theme font-serif font-semibold text-left text-md mx-2 mt-2 line-clamp-2 h-[3.2rem]">
                {title}
            </div>

        </div>
    )
}