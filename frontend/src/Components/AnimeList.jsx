import React from "react";
import {useState, useEffect} from "react"

export default function AnimeList({animes}){

    const AnimeCard = ({image, title}) =>{
        return(
            <div className="  h-9,9/10 w-44 rounded-lg flex flex-col mb-3">
                <div className=" h-60 rounded-t-lg bg-center bg-cover p-2" style={{backgroundImage : `url(${image})`}}></div>

                <div className="text-gray-400 bg-black_second_theme font-semibold tracking-wide font-serif text-center text-xs mt-0 rounded-b-lg">Airing : 21.07.2003</div>
                <div className=" text-fifth_color_theme font-serif font-semibold text-left text-md mx-2 my-1 line-clamp-2 tracking-normal">
                    {title}
                </div>
                
            </div>
        )
    }

    return(<div className="text-white col-span-7 h-auto p-3">
        <div className="bg-white h-12"></div>
        <div className="h-full w-full grid grid-cols-6 gap-4">

        {animes?.map((anime, index) => <AnimeCard key={index} image={anime.images.jpg.image_url} title={anime.title}/>)}
        
        </div>
        </div>)
}