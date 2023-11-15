import React from "react";

export default function CharacterCard({character, voiceActor , withCharacterDetails}){
    return (
        <div href={character.character.url} className="w-full md:h-20 rounded-lg bg-[rgb(20,20,20)] flex flex-col md:flex-row md:justify-between relative font font-fantasy tracking-wide text-fifth_color_theme mb-1">
        <a href={character.character.url} target="_blank" className="w-full h-full absolute md:hidden" ></a>

        { withCharacterDetails && <div className="flex md:!bg-none bg-center bg-cover w-[9rem] h-[12rem] md:w-auto md:h-auto rounded-t-lg" style={{ backgroundImage: `url(${character.character.images.jpg.image_url})` }}>
            <img className="hidden md:flex h-full w-14 rounded-l-lg" src={character.character.images.jpg.image_url} />

            <div className="flex flex-col justify-end md:justify-start md:ml-3 mt-1 w-full ">
                <p className="text-md truncate-paragraph xl:text-2xl w-full md:w-auto bg-[rgba(0,0,0,0.8)] md:bg-transparent pl-1 md:pl-0">{character.character.name}</p>
                <p className="hidden md:flex md:text-sm xl:text-md">{character.role}</p>
            </div>
        </div>}
        {/* ${withCharacterDetails ? "justify-between" : ""} */}
        <div className={`w-[9rem] h-[12rem]   md:h-full flex  md:ml-2 ${withCharacterDetails ? "md:w-auto" : "md:w-full"}`}>
            { voiceActor ?
                <>
                    <div className={`flex w-full items-start justify-end md:justify-start ${withCharacterDetails ? "md:items-end" : ""}  flex-col md:mr-2 md:mt-1 bg-center bg-cover md:!bg-none rounded-b-lg`} style={{ backgroundImage: `url(${voiceActor.person.images.jpg.image_url})` }}>
                        <p className={`w-full truncate-paragraph text-left ${withCharacterDetails ? "md:text-right" : "md:text-left"}  text-md xl:text-lg bg-[rgba(0,0,0,0.8)] md:bg-transparent pl-1 md:pl-0`}>{voiceActor.person.name}</p>
                        <p className="hidden md:flex md:text-sm xl:text-md">{voiceActor.language}</p>
                    </div>

                    <img className="hidden md:flex md:h-full rounded-r-lg w-14" src={voiceActor.person.images.jpg.image_url} />
                </>
                :
                <div className="h-full w-full flex">
                    <div className="w-full flex items-end md:items-center mr-1 md:!bg-none bg-center bg-cover rounded-b-lg" style={{ backgroundImage: `url(/icons/2.jpg)` }}>
                        <p className=" text-sm lg:text-lg text-right bg-[rgba(0,0,0,0.8)] md:bg-transparent w-full pl-1 md:pl-0">No voice actor ..</p>
                    </div>
                    <img className="hidden md:flex h-full rounded-r-lg" src="/icons/2.jpg" />
                </div>

            }
        </div>
    </div>
    )
}