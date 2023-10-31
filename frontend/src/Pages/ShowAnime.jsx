import React from "react";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import state from "../Components/Atom";
import TrailerComponent from "../Components/ShowAnimeComponents/TrailerComponent"
import AnimeRecomandation from "../Components/ShowAnimeComponents/AnimeRecomandation";
import FastDetails from "../Components/ShowAnimeComponents/FastDetails";
import Characters from "../Components/ShowAnimeComponents/SomeCharacters";
import { Spinner } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function ShowAnime() {
    const [anime, setAnime] = useState(null);
    const [characters, setCharacters] = useState(null);
    const params = useParams();
    const [refresh, setRefresh] = useAtom(state.refreshAnime)

    const navigate = useNavigate();

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

                let neededCharacters = [];
                for (let i = 0; i < characters.data.length; i++) {
                    if (i == 15) {
                        break;
                    }
                    neededCharacters.push(characters.data[i])
                }
                setCharacters(neededCharacters)

                console.log(anime)
            });
    }, [refresh]);





    const MoreDetailsComp = ({ title, contextString, optionalUrl }) => {
        return optionalUrl != undefined ? <div className="text-lg sm:text-xl"><b>{title}</b> : <a className=" text-third_color_theme" target="_blank" href={optionalUrl}>{contextString}</a></div>
            : <p ><b className="text-lg sm:text-xl ">{title}</b> : {contextString}</p>
    }

    const MoreDetailsCompArray = ({ title, info }) => {
        return <div className="">
            <b className="text-lg sm:text-xl">{title}</b> :
            {info.length != 0 ?
                info.map((producer, index) => <a key={index} className=" text-third_color_theme" target="_blank" href={producer.url}>{index >= 1 ? " , " : ""} {producer.name}</a>)
                :
                <a> Unknown...</a>
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

                        <FastDetails anime={anime} className={'z-10 h-134 col-span-10 md:col-span-5 px850:col-span-6 xl:!col-span-3 px1600:!col-span-2 w-full xl:w-96 bg-cover bg-center md:!bg-none rounded-lg  px1600:!rounded-r-lg relative flex flex-col font-fantasy text-fifth_color_theme tracking-wide md:ml-3 p-2  '} />

                        <TrailerComponent anime={anime} />
                    </div>

                    <div className="mt-7 p-2  text-fifth_color_theme">
                        <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  border-0 border-r-[0.25rem] border-l-[0.25rem] border-black_second_theme rounded-md  font-semibold px-3">
                            <p className=" text-2xl sm:text-3xl col-span-1 sm:col-span-2 xl:col-span-3 mb-3 font-fantasy font-normal">More Details</p>
                            <MoreDetailsComp title={"Rating"} contextString={anime.rating ? anime.rating : " - "} />

                            <MoreDetailsComp title={"Status"} contextString={anime.status ? anime.status : "Unknown"} />

                            <MoreDetailsComp title={"Aired"} contextString={anime.aired.string ? anime.aired.string : "Unknown"} />

                            <MoreDetailsComp title={"Season"} contextString={anime.season ? anime.season.toUpperCase() : "Unknown"} />

                            <MoreDetailsComp title={"Source"} contextString={anime.source ? anime.source : "Unknown"} />

                            <MoreDetailsComp title={"Duration"} contextString={anime.duration ? anime.duration : "Unknown"} />

                            <MoreDetailsCompArray title={"Studios"} info={anime.studios} />

                            <MoreDetailsCompArray title={"Licensors"} info={anime.licensors} />

                            <MoreDetailsCompArray title={"Producers"} info={anime.producers} />
                        </div>

                        <div className="mt-4">
                            <p className="ml-3 mb-1 text-2xl sm:text-3xl font-fantasy col-span-8" >Description </p>
                            <p className=" text-md font-bold col-span-8">{anime.synopsis}</p>

                        </div>
                    </div>


                    <div className="mx-3 mt-4">
                        <div className=" text-2xl sm:text-3xl text-fifth_color_theme font-fantasy font-normal ml-2 mb-2 flex items-center">
                            <p> Characters</p>
                            <Button onClick = {() => navigate("characters")} variant="text" className="flex items-center gap-2 text-black_first_theme bg-forth_color_theme hover:bg-third_color_theme hover:text-fifth_color_theme ml-3 duration-300 font-fantasy font-normal tracking-wide text-sm sm:text-lg py-2 px-3">
                                See all characters{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </Button>
                        </div>
                        {characters ?
                            <Characters characters={characters} />
                            :
                            <Spinner />
                        }
                    </div>


                    <AnimeRecomandation />



                </div> : null}
        </>
    )
}