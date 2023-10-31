import React from "react";


export default function Characters({ characters }) {
    return (
        <div className="flex md:h-auto overflow-x-scroll md:grid md:grid-cols-2 px1450:!grid-cols-3 gap-2 md:gap:4">
            {characters.map((character, index) =>

                <div key={index} href={character.character.url} className="w-full md:h-20 rounded-lg bg-[rgb(20,20,20)] flex flex-col md:flex-row md:justify-between relative font font-fantasy tracking-wide text-fifth_color_theme">
                    {/* <a href={character.character.url} target="_blank" className="w-full h-full absolute" ></a> */}

                    <div className="flex md:!bg-none bg-center bg-cover w-[9rem] h-[12rem] md:w-auto md:h-auto" style={{ backgroundImage: `url(${character.character.images.jpg.image_url})` }}>
                        <img className="hidden md:flex h-full w-14 rounded-l-lg" src={character.character.images.jpg.image_url} />

                        <div className="flex flex-col justify-end md:justify-start md:ml-3 mt-1 w-full">
                            <p className="text-md truncate-paragraph xl:text-2xl w-full md:w-auto bg-[rgba(0,0,0,0.8)] md:bg-transparent pl-1 md:pl-0">{character.character.name}</p>
                            <p className="hidden md:flex md:text-sm xl:text-md">{character.role}</p>
                        </div>
                    </div>

                    <div className="w-[9rem] h-[12rem] md:w-auto  md:h-full flex md:ml-2">
                        {character.voice_actors[0] ?
                            <>
                                <div className="flex w-full items-start justify-end md:justify-start md:items-end flex-col md:mr-2 md:mt-1 bg-center bg-cover md:!bg-none" style={{ backgroundImage: `url(${character.voice_actors[0].person.images.jpg.image_url})` }}>
                                    <p className="w-full truncate-paragraph text-left md:text-right text-md xl:text-lg bg-[rgba(0,0,0,0.8)] md:bg-transparent pl-1 md:pl-0">{character.voice_actors[0].person.name}</p>
                                    <p className="hidden md:flex md:text-sm xl:text-md">{character.voice_actors[0].language}</p>
                                </div>

                                <img className="hidden md:flex md:h-full rounded-r-lg w-14" src={character.voice_actors[0].person.images.jpg.image_url} />
                            </>
                            :
                            <div className="h-full w-full flex">
                                <div className="w-full flex items-end md:items-center mr-1 md:!bg-none bg-center bg-cover" style={{ backgroundImage: `url(/icons/2.jpg)` }}>
                                    <p className="text-lg bg-[rgba(0,0,0,0.8)] md:bg-transparent w-full pl-1 md:pl-0">No voice actor ..</p>
                                </div>
                                <img className="hidden md:flex h-full rounded-r-lg" src="/icons/2.jpg" />
                            </div>

                        }
                    </div>
                </div>


            )}

        </div>
    )
}