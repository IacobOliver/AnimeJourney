import React from "react";


export default function Characters({ characters }) {
    console.log("Characters : ", characters)
    return (
        <div className="grid grid-cols-3 gap-4">
            {characters.map((character, index) =>

                <div key={index} href={character.character.url} className="w-full h-20 rounded-lg bg-[rgb(20,20,20)] flex justify-between relative font font-fantasy tracking-wide">
                    <a href={character.character.url} target="_blank" className="w-full h-full absolute" ></a>

                    <div className="flex">
                        <img className="h-full w-14 rounded-l-lg" src={character.character.images.jpg.image_url} />

                        <div className="flex flex-col ml-3 mt-1">
                            <p className="text-2xl">{character.character.name}</p>
                            <p>{character.role}</p>
                        </div>
                    </div>

                    <div className="h-full flex">
                        {character.voice_actors[0] ?
                            <>
                                <div className="flex items-end flex-col mr-2 mt-1">
                                    <p className="text-lg">{ character.voice_actors[0].person.name}</p>
                                    <p>{ character.voice_actors[0].language}</p>
                                </div>

                                <img className="h-full rounded-r-lg w-14" src={character.voice_actors[0].person.images.jpg.image_url} />
                            </>
                            :
                            <div className="h-full flex">
                                <div className="flex items-center mr-1"><p className="text-lg">No voice actor ..</p></div>
                                <img className="h-full rounded-r-lg" src = "/icons/2.jpg"/>
                            </div>

                        }
                    </div>
                </div>


            )}

        </div>
    )
}