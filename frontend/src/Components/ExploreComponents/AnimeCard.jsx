import React from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import state from "../Atom";

export default function AnimeCard({ image, title, airedFrom, type, animeId }){
    const [play, setPlay] = useAtom(state.play);
    const [mute , setMute] = useAtom(state.mute)
    const [refresh, setRefresh] = useAtom(state.refreshAnime)
    const navigate = useNavigate();

    const handleAnimeCardEvent = (animeId) =>{
        setPlay(true)
        setMute(false)
        setRefresh(refresh + 1)
        navigate(`/anime/${animeId}`)
    }


        return (
            <div className="h-9/10 w-44  rounded-lg flex flex-col relative">
            <div className="w-full h-full top-0 left-0 absolute hover:bg-[rgba(0,0,0,0.5)]"  onClick={() => handleAnimeCardEvent(animeId)}/>
            <div className=" h-60 rounded-t-lg bg-center bg-cover p-2 w-full" style={{ backgroundImage: `url(${image})` }}></div>
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