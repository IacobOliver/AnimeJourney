import React from "react";
import AnimeCarrousel from "../Components/ExploreComponents/AnimeCarrousel";
import NewAnime from "../Components/ExploreComponents/NewAnime"
import UpcomingAnime from "../Components/ExploreComponents/UpcomigAnime";
import Loading from "../Components/Loading"
import {useState, useEffect} from "react"
import Footer from "../Components/ExploreComponents/Footer";

export default function Explore(){

    return( 
    <div className="">
    <AnimeCarrousel/>
    {/* <Loading/> */}
    

    <div className="grid grid-cols-10">
    <NewAnime/>
    <UpcomingAnime/>
    </div>
    <Footer/>


    </div>)
    }