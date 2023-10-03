import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import Loading from "../Components/Loading";
import state from "../Components/Atom";
import RatingStarts from "../Components/ExploreComponents/RatingStars";

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


    const TrailerComponent = () => {
        return (<div className="flex flex-col items-center w-1/2 justify-center relative mx-44">

            {anime.trailer.embed_url ?
                <>
                    <iframe
                        width="1060"
                        height="540"
                        src={`${anime.trailer.embed_url}&mute=1&showinfo=1`}
                        allow="accelerometer;  picture-in-picture; autoplay"
                        className="z-0 absolute blur-2xl overflow-hidden"
                    ></iframe>
                    <iframe
                        width="716"
                        height="403"
                        src={`${anime.trailer.embed_url}&mute=1`}
                        title="YouTube video player"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
                        allowfullscreen
                        className="z-20 rounded-xl"
                    ></iframe>
                </>
                :
                <>
                    <Loading />
                    <p className=" text-3xl font-fantasy tracking-wide">Sorry... the trailer is not availeble for this anime...</p>
                </>
            }
        </div>
        )
    }


    return (
        <>
            {anime ?
                <div className="w-full mt-5 px-2">

                    <div className="flex">
                        <div className="h-134 w-96 bg-cover bg-center rounded-l-lg flex" style={{ backgroundImage: `url(${anime.images.jpg.large_image_url})` }}></div>
                        <div className="h-134 w-96 bg-cover bg-center rounded-r-lg flex flex-col text-fifth_color_theme p-2">
                            <p className=" font-fantasy text-xl tracking-wide text-center">{anime.title}</p>
                            <div className="my-1"><RatingStarts rating={anime.score} members={anime.scored_by}/></div>

                            <div className="flex justify-around font-fantasy text-fifth_color_theme tracking-wide my-1">
                                <p className=" bg-black_second_theme rounded-lg p-2">{anime.type}</p>
                                <p className=" font-extrabold">|</p>
                                <p className=" bg-black_second_theme rounded-lg p-2"> Rank #{anime.rank} </p>
                                <p  className=" font-extrabold">|</p>
                                <p className=" bg-black_second_theme rounded-lg p-2"> {anime.episodes} ep</p>
                            </div>
                            <p className="text-center font-fantasy text-fifth_color_theme tracking-wide">Rating :  {anime.rating}</p>


                        </div>
                        <TrailerComponent />


                    </div>

                    <p className="">{anime.synopsis}</p>


                </div> : null}
        </>
    )
}