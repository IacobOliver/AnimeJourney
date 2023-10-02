import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ShowAnime() {
    const [anime, setAnime] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/anime/${params.id}/full`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAnime(data.data)
            })

    }, [])



    return (
        <>
            {anime ?
                <div className="w-full mt-5 px-2">
                    <div className="h-134 w-96 bg-cover bg-center rounded-lg flex" style={{ backgroundImage: `url(${anime.images.jpg.large_image_url})` }}></div>
{/* 
                    <video id="myVideo" width="1080" height="360" controls autoPlay muted>
                        <source src={anime.trailer.embed_url} />
                            Your browser does not support the video tag.
                    </video> */}

                     <iframe
                    width="1080"
                    height="580"
                    src={`${anime.trailer.embed_url}&mute=1`}
                    title="YouTube video player"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
                    allowfullscreen
                    muted
                ></iframe> 

{/* <iframe width="560" height="315" src={anime.trailer.embed_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

                </div> : null}
        </>
    )
}