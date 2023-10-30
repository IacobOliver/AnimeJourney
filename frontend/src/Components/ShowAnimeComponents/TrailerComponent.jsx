import React from "react";
import { useState, useRef } from "react";
import { useAtom } from "jotai";
import Loading from "../Loading";
import state from "../Atom";

export default function TrailerComponent({anime}){
    const [play, setPlay] = useAtom(state.play);
    const [mute , setMute] = useAtom(state.mute)

    const trailer = useRef(null)
    const trailerBack = useRef(null)

    function controlVideo(vidFunc) {
        let iframe = trailer.current.contentWindow;
        let iframeback = trailerBack.current.contentWindow;
        iframe.postMessage(
          '{"event":"command","func":"' + vidFunc + '","args":""}',
          "*"
        );

        if(vidFunc != "mute" && vidFunc != "unMute"){
            console.log("in")
        iframeback.postMessage(
            '{"event":"command","func":"' + vidFunc + '","args":""}',
            "*"
          );
        }
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

      const handleMute = () =>{
        if(!mute){
            controlVideo('unMute')
            setMute(true)
        }else{
            controlVideo('mute')
            setMute(false)
        }
      }

    return (<div className="col-span-10 xl:col-span-7 mt-16 xl:mt-0 px1600:!col-span-6 flex flex-col items-center justify-center relative mx-44 border border-black_second_theme rounded-xl">
        <div className=" w-full h-full z-30 absolute"></div>
        {anime.trailer.embed_url ?
            <>
                <iframe
                ref={trailerBack}
                    src={`${anime.trailer.embed_url}&mute=1&loop=1&playlist=${anime.trailer.youtube_id}`}
                    allow="accelerometer;  picture-in-picture; autoplay"
                    className="z-0 absolute blur-2xl overflow-hidden 2xl:w-[1060px] 2xl:h-[540px] w-[860px] h-[340px]"
                ></iframe>
               
                <div className=" w-[1060px] h-[540px] 2xl:w-[880px] 2xl:h-[360px] absolute"></div>
                <iframe
                    ref={trailer}
                    src={`${anime.trailer.embed_url}&mute=1&controls=0&loop=1&playlist=${anime.trailer.youtube_id}`}
                    allow="accelerometer; picture-in-picture; autoplay;"
                    className="z-20 rounded-xl 2xl:w-[716px] 2xl:h-[403px] w-[525px] h-[295px]"
                    
                ></iframe>
                <div className="flex bg-[rgba(0,0,0,0.5)] text-forth_color_theme z-30 rounded-b-lg">
                    <div  className="mx-2 w-5 h-7 flex items-center justify-center" onClick={handlePlay} >{play  ? <i className="fa-solid fa-pause"/> : <i className="fa-solid fa-play"/>}</div>
                    <div  className="mx-2 w-5  h-7 flex items-center justify-center" onClick={handleMute}>{mute  ? <i className="fa-solid fa-volume-high"></i> : <i className="fa-solid fa-volume-xmark"></i>}</div>
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