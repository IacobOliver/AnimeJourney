import React from "react";
import CharacterCard from "./CharacterCard";


export default function SomeCharacters({ characters }) {
    return (
        <div className="flex md:h-auto overflow-x-scroll md:grid md:grid-cols-2 px1450:!grid-cols-3 gap-2 md:gap:4">
            {characters.map((character, index) =>

               <CharacterCard character={character} index={index}/>

            )}

        </div>
    )
}