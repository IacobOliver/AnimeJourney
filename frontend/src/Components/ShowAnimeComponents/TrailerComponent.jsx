import React from "react";
import { useState, useRef } from "react";
import Loading from "../Loading";

export default function TrailerComponent({anime}){
    const [play, setPlay] = useState(true);
    const [mute , setMute] = useState(false)

    const trailer = useRef(null)
    const trailerBack = useRef(null)

    function controlVideo(vidFunc) {
        let iframe = trailer.current.contentWindow;
        let iframeback = trailerBack.current.contentWindow;
        iframe.postMessage(
          '{"event":"command","func":"' + vidFunc + '","args":""}',
          "*"
        );
        iframeback.postMessage(
            '{"event":"command","func":"' + vidFunc + '","args":""}',
            "*"
          );
      }

      
      const handlePlay = () =>{
        if(play){
            controlVideo('pauseVideo')
            setPlay(false)
        }else{
            controlVideo('playVideo')
            setPlay(true)
        }
      }

    return (<div className="flex flex-col items-center w-1/2 justify-center relative mx-44 border border-black_second_theme rounded-xl">
        <div className=" w-full h-full z-30 absolute" onClick={() => controlVideo('unMute')}></div>
        {anime.trailer.embed_url ?
            <>
                <iframe
                ref={trailerBack}
                    width="1060"
                    height="540"
                    src={`${anime.trailer.embed_url}&mute=1&showinfo=1`}
                    allow="accelerometer;  picture-in-picture; autoplay"
                    className="z-0 absolute blur-2xl overflow-hidden"
                ></iframe>
                <div className=" w-[1060px] h-[540px] absolute"></div>
                <iframe
                    ref={trailer}
                    width="716"
                    height="403"
                    src={`${anime.trailer.embed_url}&mute=1`}
                    title="YouTube video player"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
                    allowfullscreen
                    className="z-20 rounded-xl"
                ></iframe>
                <div className="flex text-black z-30">
                    <div onClick={handlePlay} >{play  ? <i class="fa-solid fa-pause"/> : <i class="fa-solid fa-play"/>}</div>
                    <div >{mute  ? <i class="fa-solid fa-volume-high"></i> : <i class="fa-solid fa-volume-xmark"></i>}</div>
                </div>
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