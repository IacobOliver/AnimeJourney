import React from "react";
import AnimeCarrousel from "../Components/AnimeCarrousel";
import AnimeList from "../Components/AnimeList";
import AnimeListVertical from "../Components/AnimeListVertical"
import Loading from "../Components/Loading"

export default function Explore(){
    return( 
    <div className="">
    <AnimeCarrousel/>
    <Loading/>
    

    {/* <div className="grid grid-cols-10">
    <AnimeList/>
    <AnimeListVertical/>
    </div> */}

    </div>)
    }