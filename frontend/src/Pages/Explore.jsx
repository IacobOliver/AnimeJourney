import React from "react";
import AnimeCarrousel from "../Components/AnimeCarrousel";
import AnimeList from "../Components/AnimeList";
import AnimeListVertical from "../Components/NewAnimeSeasons"
import Loading from "../Components/Loading"
import {useState, useEffect} from "react"

export default function Explore(){
    const [animeNewSeasons, setAnimeNewSeasons] = useState(null)

    useEffect(() =>{
        fetch(`https://api.jikan.moe/v4/seasons/now?page=1`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAnimeNewSeasons(data.data)
        })
     },[])


    return( 
    <div className="">
    <AnimeCarrousel/>
    {/* <Loading/> */}
    

    <div className="grid grid-cols-10">
     {animeNewSeasons? <AnimeList animes={animeNewSeasons}/> : <Loading/>}
    <AnimeListVertical/>
    </div>

    </div>)
    }