import React from "react";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import state from "../Components/Atom";
import RatingStarts from "../Components/ExploreComponents/RatingStars";
import TrailerComponent from "../Components/ShowAnimeComponents/TrailerComponent"
import EditAnimeStatus from "../Components/ShowAnimeComponents/EditAnimeStatus";
import AnimeRecomandation from "../Components/ShowAnimeComponents/AnimeRecomandation";
import FastDetails from "../Components/ShowAnimeComponents/FastDetails";

export default function ShowAnime() {
    const [anime, setAnime] = useState(null);
    const params = useParams();
    const [refresh, setRefresh] = useAtom(state.refreshAnime)


    useEffect(() => {
        Promise.all([
            fetch(`https://api.jikan.moe/v4/anime/${params.id}/full`),
            fetch(`https://api.jikan.moe/v4/anime/${params.id}/characters`),
        ])
            .then(([anime, characters]) =>
                Promise.all([anime.json(), characters.json()])
            )
            .then(([anime, characters]) => {
                setAnime(anime.data);
                console.log(anime)
                console.log("Characters : ", characters)

            });
    }, [refresh]);





    const MoreDetailsComp = ({ title, contextString, optionalUrl }) => {
        return optionalUrl != undefined ? <div className="my-1 "><b>{title}</b> : <a className=" text-third_color_theme" target="_blank" href={optionalUrl}>{contextString}</a></div>
            : <p className="my-1 "><b>{title}</b> : {contextString}</p>
    }

    const MoreDetailsCompArray = ({ title, info }) => {
        return <div>
            <b>{title} : </b>
            {info.length != 0 ?
                info.map((producer, index) => <a key={index} className=" text-third_color_theme" target="_blank" href={producer.url}>{index >= 1 ? " , " : ""} {producer.name}</a>)
                :
                <p>Unknown...</p>
            }
        </div>

    }


    return (
        <>
            {anime ?
                <div className="w-full mt-5 px-2">

                    {/* IMAGE INFO AND TRAILER */}
                    <div className="grid grid-cols-10 p-2">
                        <div className="hidden md:flex col-span-5 px850:!col-span-4 px1600:!col-span-2 xl:hidden px1600:!flex h-134 min-w-[15rem] bg-cover bg-center rounded-l-lg " style={{ backgroundImage: `url(${anime.images.jpg.large_image_url})` }}></div>
                       
                        <FastDetails anime={anime} className={'z-10 h-134 col-span-10 md:col-span-5 px850:col-span-6 xl:!col-span-3 px1600:!col-span-2 w-full xl:w-96 bg-cover bg-center md:!bg-none rounded-lg  px1600:!rounded-r-lg relative flex flex-col font-fantasy text-fifth_color_theme tracking-wide ml-3 p-2  '} />
                        
                        <TrailerComponent anime={anime} />
                    </div>

                    <div className="mt-7 p-2 grid grid-cols-10 text-fifth_color_theme">
                        <div className="col-span-2 border-0 border-r-[0.25rem] border-r-black_second_theme rounded-md  mr-2 font-semibold">
                            <p className="text-3xl mb-3 font-fantasy font-normal">More Details</p>
                            <MoreDetailsComp title={"Rating"} contextString={anime.rating ? anime.rating : " - "} />

                            <MoreDetailsComp title={"Status"} contextString={anime.status ? anime.status : "Unknown"} />

                            <MoreDetailsComp title={"Aired"} contextString={anime.aired.string ? anime.aired.string : "Unknown"} />

                            <MoreDetailsComp title={"Season"} contextString={anime.season ? anime.season.toUpperCase() : "Unknown"} />

                            <MoreDetailsCompArray title={"Studios"} info={anime.studios} />

                            <MoreDetailsCompArray title={"Licensors"} info={anime.licensors} />

                            <MoreDetailsCompArray title={"Producers"} info={anime.producers} />

                            <MoreDetailsComp title={"Source"} contextString={anime.source ? anime.source : "Unknown"} />

                            <MoreDetailsComp title={"Duration"} contextString={anime.duration ? anime.duration : "Unknown"} />
                        </div>

                        <div className="col-span-8">
                            <p className="ml-3 mb-1 text-3xl font-fantasy col-span-8" >Description </p>
                            <p className=" text-md font-bold col-span-8">{anime.synopsis}</p>

                            {/* <hr className="col-span-8 my-7 border-0 h-1 bg-black_second_theme rounded-lg" /> */}

                        </div>
                    </div>

                    <AnimeRecomandation />



                </div> : null}
        </>
    )
}