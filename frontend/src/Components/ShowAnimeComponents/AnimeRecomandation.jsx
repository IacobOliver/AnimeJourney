import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import state from "../Atom";
import AnimeCard from "../ExploreComponents/AnimeCard";
import Loading from "../Loading";
import { Carousel } from "@material-tailwind/react";

const QUANTITY = 10;

export default function AnimeRecomandation() {
    const [animeRec, setAnimeRec] = useState([]);
    const params = useParams();
    const [refresh, setRefresh] = useAtom(state.refreshAnime)
    const [page, setPage] = useState(0)

    

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/anime/${params.id}/recommendations`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAnimeRec(data.data)
            })

    }, [refresh])

    return (

        <div className=" h-fit col-span-3 grid grid-cols-5 gap-4 px-3">

            <div className="flex items-center col-span-5">
            <p className="text-2xl sm:text-3xl font-fantasy ml-3">Recommended if you like this anime ♥</p>
            <i className="fa-solid fa-angle-left text-2xl w-10 h-10 hover:bg-black_second_theme rounded-full flex items-center justify-center" onClick={() => {
                if(page != 0)
                 setPage(page - 1)
                }}/>
            <i className="fa-solid fa-angle-right text-2xl w-10 h-10 hover:bg-black_second_theme rounded-full flex items-center justify-center" onClick={() => {
                if((page + 1) * 10 < animeRec.length)
                 setPage(page + 1)
                }}/>
            </div>
           
            {animeRec.length != 0 ?
                animeRec.slice(page * QUANTITY, page * QUANTITY + 10).map((anime, index) => {
                return   <AnimeCard key={index} image={anime.entry.images.jpg.image_url} title={anime.entry.title} animeId={anime.entry.mal_id} />
            
            })
                                   
                :
                <div className="col-span-8">
                    <p className="text-center text-2xl sm:text-3xl font-fantasy tracking-wide">Can't find any recommandation</p>
                    <Loading />
                </div>
            }
           
        </div>)
}