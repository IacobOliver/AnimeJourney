import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import state from "../Components/Atom";
import RatingStarts from "../Components/ExploreComponents/RatingStars";
import TrailerComponent from "../Components/ShowAnimeComponents/TrailerComponent"

export default function ShowAnime() {
    const [anime, setAnime] = useState(null);
    const params = useParams();
    const [refresh, setRefresh] = useAtom(state.refreshAnime)
 

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/anime/${params.id}/full`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAnime(data.data)
            })

    }, [refresh])

   


    

    const DetailComp = ({ detail }) => {
        return (
            <div className=" bg-black_second_theme rounded-lg w-full flex items-center justify-center">
                <p className="text-center">{detail}</p>
            </div>)
    }

    return (
        <>
            {anime ?
                <div className="w-full mt-5 px-2">

                    <div className="flex">
                        <div className="h-134 w-96 bg-cover bg-center rounded-l-lg flex" style={{ backgroundImage: `url(${anime.images.jpg.large_image_url})` }}></div>

                        <div className="h-134 w-96 bg-cover bg-center rounded-r-lg flex flex-col font-fantasy text-fifth_color_theme tracking-wide ml-3 p-2">
                            <p className=" font-fantasy text-3xl tracking-wide text-center mt-5">{anime.title}</p>
                            <div className="my-1"><RatingStarts rating={anime.score} members={anime.scored_by} /></div>

                            <div className="flex justify-around  my-5">
                                <DetailComp detail={anime.type ? anime.type : "Unknown"} />
                                <p className=" font-extrabold p-2">|</p>
                                <DetailComp detail={anime.rank ? `Rank #${anime.rank}` : "Unranked"} />
                                <p className=" font-extrabold p-2">|</p>
                                <DetailComp detail={anime.episodes ? `${anime.episodes} ep` : "?   ep"} />
                            </div>


                            <div className="flex flex-col items-center mt-5">
                                <p className="text-2xl">~  Genres  ~</p>
                                <div className="flex flex-wrap mt-3">
                                    {anime.genres ? anime.genres.map(gen => <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-1 rounded-xl mx-[0.3rem] mt-[0.3rem] text-black_first_theme">{gen.name}</div>) : <div>No specified genres</div>}
                                </div>

                            </div>

                            <div className="p-3 flex flex-col items-center">
                                <p className="text-2xl mt-5 mb-3"> ~  Other Details  ~</p>
                                <p className="my-1 line-clamp-1">Rating :  {anime.rating ? anime.rating : " - "}</p>
                                <p className="my-1">Status - {anime.status ? anime.status : "Unknown"}</p>
                                <p className="my-1">Season - {anime.season ? anime.season.toUpperCase() : "Unknown"}</p>
                            </div>

                        </div>

                        <TrailerComponent anime={anime}/>


                    </div>

                    <p className="">{anime.synopsis}</p>


                </div> : null}
        </>
    )
}