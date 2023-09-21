import React from "react";
import {useState, useEffect} from "react"

export default function AnimeList({animes, page, setPage}){

    const AnimeCard = ({image, title, airedFrom}) =>{
        return(
            <div className="h-9/10 w-44 rounded-lg flex flex-col item">
                <div className=" h-60 rounded-t-lg bg-center bg-cover p-2" style={{backgroundImage : `url(${image})`}}></div>
                <div className="text-gray-400 bg-black_second_theme font-semibold tracking-wide font-serif text-center text-xs mt-0 rounded-b-lg">Airing : {airedFrom}</div>
               
                <div className=" text-fifth_color_theme font-serif font-semibold text-left text-md mx-2 mt-2 line-clamp-2 tracking-normal">
                    {title}
                </div>
                
            </div>
        )
    }


    const nextPage = () =>{
        console.log(animes.length)
        if(animes.length < 12){
            return
        }
        setPage(page + 1);
    }

    const previosPage = () =>{
        if(page == 0 ){
            console.log("no room ");
            return
        }
        setPage(page -1);
    }

    return(<div className="text-white col-span-7 p-3">
        <div className=" bg-black_second_theme h-16">
            <button onClick={previosPage} className="p-3 mx-3 bg-third_color_theme rounded-md ">Previos</button>
            <button onClick={nextPage} className="p-3 mx-3 bg-third_color_theme rounded-md ">Next</button>
        </div>
        <div className="h-full w-full grid grid-cols-6 gap-4 mt-2">

        {animes?.map((anime, index) => <AnimeCard key={index} image={anime.image} title={anime.name} airedFrom={anime.airedFrom}/>)}
        
        </div>
        </div>)
}