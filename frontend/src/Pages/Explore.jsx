import React from "react";
import AnimeCarrousel from "../Components/ExploreComponents/AnimeCarrousel";
import AnimeList from "../Components/ExploreComponents/AnimeList";
import AnimeListVertical from "../Components/ExploreComponents/NewAnimeSeasons"
import Loading from "../Components/Loading"
import {useState, useEffect} from "react"
import Footer from "../Components/ExploreComponents/Footer";

export default function Explore(){

    return( 
    <div className="">
    <AnimeCarrousel/>
    {/* <Loading/> */}
    

    <div className="grid grid-cols-10">
    <AnimeList/> 
    <AnimeListVertical/>
    </div>
    <Footer/>

    </div>)
    }