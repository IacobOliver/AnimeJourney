import React from "react";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import state from "../Components/Atom";
import RatingStarts from "../Components/ExploreComponents/RatingStars";
import TrailerComponent from "../Components/ShowAnimeComponents/TrailerComponent"
import EditAnimeStatus from "../Components/ShowAnimeComponents/EditAnimeStatus";
import AnimeRecomandation from "../Components/ShowAnimeComponents/AnimeRecomandation";

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



    const DetailComp = ({ detail }) => {
        return (
            <div className=" bg-black_second_theme rounded-lg w-full flex items-center justify-center">
                <p className="text-center">{detail}</p>
            </div>)
    }

    const MoreDetailsComp = ({ title, contextString, optionalUrl }) => {
        return optionalUrl != undefined ? <div className="my-1 "><b>{title}</b> : <a className=" text-third_color_theme" target="_blank" href={optionalUrl}>{contextString}</a></div>
            : <p className="my-1 "><b>{title}</b> : {contextString}</p>
    }

    const MoreDetailsCompArray = ({title, info }) => {
        console.log(title, info)
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
                    <div className="flex p-2">
                        <div className="h-134 w-96 bg-cover bg-center rounded-l-lg flex" style={{ backgroundImage: `url(${anime.images.jpg.large_image_url})` }}></div>

                        <div className="h-134 w-96 bg-cover bg-center rounded-r-lg flex flex-col font-fantasy text-fifth_color_theme tracking-wide ml-3 p-2">
                            <p className=" font-fantasy text-3xl tracking-wide text-center mt-5">{anime.title}</p>
                            <div className="my-1"><RatingStarts rating={anime.score} members={anime.scored_by} /></div>

                            <div className="flex justify-around  my-3">
                                <DetailComp detail={anime.type ? anime.type : "Unknown"} />
                                <p className=" font-extrabold p-2">|</p>
                                <DetailComp detail={anime.rank ? `Rank #${anime.rank}` : "Unranked"} />
                                <p className=" font-extrabold p-2">|</p>
                                <DetailComp detail={anime.episodes ? `${anime.episodes} ep` : "?   ep"} />
                            </div>


                            <div className="flex flex-col items-center mt-3">
                                <p className="text-2xl">~  Genres  ~</p>
                                <div className="flex flex-wrap mt-3">
                                    {anime.genres ? anime.genres.map((gen, index) => <div key={index} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-1 rounded-xl mx-[0.3rem] mt-[0.3rem] text-black_first_theme">{gen.name}</div>) : <div>No specified genres</div>}
                                </div>

                            </div>


                            <EditAnimeStatus numberOfEpisodes={anime.episodes} />

                        </div>

                        <TrailerComponent anime={anime} />
                    </div>


                    <div className="mt-7 p-2 grid grid-cols-10 text-fifth_color_theme">

                        <div className="col-span-2 border-0 border-r-[0.25rem] border-r-black_second_theme rounded-md  mr-2 font-semibold">

                            <p className="text-3xl mb-3 font-fantasy font-normal">More Details</p>
                            <MoreDetailsComp title={"Rating"} contextString={anime.rating ? anime.rating : " - "} />

                            <MoreDetailsComp title={"Status"} contextString={anime.status ? anime.status : "Unknown"} />

                            <MoreDetailsComp title={"Aired"} contextString={anime.aired.string ? anime.aired.string : "Unknown"} />

                            <MoreDetailsComp title={"Season"} contextString={anime.season ? anime.season.toUpperCase() : "Unknown"} />

                            <MoreDetailsComp title={"Studio"} contextString={anime.studios[0] ? anime.studios[0].name : "Unknown"} optionalUrl={anime.studios[0].url} />

                            <MoreDetailsCompArray title={"Licensors"} info={anime.licensors} />

                            <MoreDetailsCompArray title={"Producers"} info={anime.producers} />

                            <MoreDetailsComp title={"Source"} contextString={anime.source ? anime.source : "Unknown"} />

                            <MoreDetailsComp title={"Duration"} contextString={anime.duration ? anime.duration : "Unknown"} />


                        </div>

                        <div className="col-span-8">
                            <p className="ml-3 mb-1 text-3xl font-fantasy col-span-8" >Description </p>
                            <p className=" text-md font-bold col-span-8">{anime.synopsis}</p>

                            <hr className="col-span-8 my-7 border-0 h-1 bg-black_second_theme rounded-lg" />

                            <AnimeRecomandation />
                        </div>
                    </div>




                </div> : null}
        </>
    )
}