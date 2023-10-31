import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CharacterCard from "../Components/ShowAnimeComponents/CharacterCard";
import Loading from "../Components/Loading";
import {
    Popover,
    PopoverHandler,
    PopoverContent,
  } from "@material-tailwind/react";

export default function AllAnimeCharacters(){
    const [characters, setCharacters] = useState(null);
    const params = useParams();

    useEffect(() =>{
        fetch(`https://api.jikan.moe/v4/anime/${params.id}/characters`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCharacters(data.data)
        })
    },[])


    const AllVoiceActorsPopOver = ({character}) =>{
        return(
            <Popover>
            <PopoverHandler>
              <div> <CharacterCard character={character} index={0} voiceActor={character.voice_actors[0]} withCharacterDetails={true}/></div>
            </PopoverHandler>
            <PopoverContent className="z-[999] bg-[rgba(0,0,0,0.7)] backdrop-blur-md">
              <div className="">
                {character.voice_actors.length > 1 ? character.voice_actors.map((actor, index) =>{
                    if(index > 0){
                        return <CharacterCard character={character} index={index} voiceActor={actor}/>
                    }
                })
                :
                <p className=" text-fifth_color_theme text-lg font-fantasy tracking-wide ">No other voice actors ...</p>            
                }
              </div>
             
            </PopoverContent>
          </Popover>
        )
    }



    return(
        <div className="grid grid-cols-2 px600:grid-cols-4 md:!grid-cols-2 xl:!grid-cols-3 place-items-center px600:place-items-stretch gap-y-6 md:gap-y-2 gap-2 p-3 mt-2">

            {characters ? 
            characters.map((character, index) => <AllVoiceActorsPopOver key={index} character={character}/>) 
            :
            <Loading/>
        }

        </div>
    )
}