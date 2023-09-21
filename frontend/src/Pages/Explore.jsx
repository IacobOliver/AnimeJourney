import React from "react";
import AnimeCarrousel from "../Components/ExploreComponents/AnimeCarrousel";
import AnimeList from "../Components/ExploreComponents/AnimeList";
import AnimeListVertical from "../Components/ExploreComponents/NewAnimeSeasons"
import Loading from "../Components/Loading"
import {useState, useEffect} from "react"
import Footer from "../Components/ExploreComponents/Footer";

export default function Explore(){
    // const [animeNewSeasons, setAnimeNewSeasons] = useState(null)
    // // const [refreshForNewSeasons, setRefreshForNewSeasons] = useState(0)
    // const [newSeasonPage, setNewSeasonPage] = useState(0);

    // useEffect(() =>{
    //     fetch(`http://localhost:8080/newAnimeSeasons/getAnime`, {
    //         method : "POST",
    //         headers : {
    //             "Content-Type" : "application/json",
    //         },
    //         body: JSON.stringify({
    //             page : newSeasonPage,
    //             numberOfItems : 12,
    //             filter : "none"
    //         })
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setAnimeNewSeasons(data)
    //     })
    //  },[newSeasonPage])


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