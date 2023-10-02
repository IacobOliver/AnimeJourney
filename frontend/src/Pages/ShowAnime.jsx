import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import Loading from "../Components/Loading";
import state from "../Components/Atom";

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


    const TrailerComponent = () =>{
        return( <div className="flex flex-col items-center justify-center w-4/5">
        
            {anime.trailer.embed_url ? <iframe
                width="1080"
                height="580"
                src={`${anime.trailer.embed_url}&mute=1`}
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
                allowfullscreen
            ></iframe> : 
                <>
                <Loading/>
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
                    <div className="h-134 w-96 bg-cover bg-center rounded-lg flex" style={{ backgroundImage: `url(${anime.images.jpg.large_image_url})` }}></div>
                    <TrailerComponent/>


                    
                    </div>


                </div> : null}
        </>
    )
}