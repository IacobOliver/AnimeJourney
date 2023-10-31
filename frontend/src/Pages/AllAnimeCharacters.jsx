import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CharacterCard from "../Components/ShowAnimeComponents/CharacterCard";
import Loading from "../Components/Loading";

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



    return(
        <div className="grid grid-cols-3 gap-3 p-3 mt-2">
            {characters ? 
            characters.map((character, index) => <CharacterCard character={character} index={index}/>)
            :
            <Loading/>
        
        
        }

        </div>
    )
}