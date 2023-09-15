import React from "react";
import AnimeCarrousel from "../Components/AnimeCarrousel";
import AnimeList from "../Components/AnimeList";
import AnimeListVertical from "../Components/AnimeListVertical"
import Loading from "../Components/Loading"
import {useState, useEffect} from "react"

export default function Explore(){
    const [animeSeasons, setAnimeSeasons] = useState("null")

    useEffect(() =>{
        fetch("https://api.jikan.moe/v4/seasons/now?page=2")
        .then(res => res.json())
        .then(data => console.log(data))
     },[])


    return( 
    <div className="">
    <AnimeCarrousel/>
    <Loading/>
    

    <div className="grid grid-cols-10">
    <AnimeList animes={animeSeasons}/>
    <AnimeListVertical/>
    </div>

    </div>)
    }