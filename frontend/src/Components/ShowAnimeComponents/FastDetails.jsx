import React from "react";
import RatingStarts from "../ExploreComponents/RatingStars";
import EditAnimeStatus from "./EditAnimeStatus";


export default function FastDetails({anime, className}){

    const DetailComp = ({ detail }) => {
        return (
            <div className=" bg-black_second_theme rounded-lg w-full flex items-center justify-center">
                <p className="text-center">{detail}</p>
            </div>)
    }


    return(
        <div className={className}>
        <p className=" font-fantasy text-3xl tracking-wide text-center mt-3 line-clamp-3">{anime.title}</p>
        <div className="my-1"><RatingStarts rating={anime.score} members={anime.scored_by} /></div>

        <div className="flex justify-around  my-3">
            <DetailComp detail={anime.type ? anime.type : "Unknown"} />
            <p className=" font-extrabold p-2">|</p>
            <DetailComp detail={anime.rank ? `Rank #${anime.rank}` : "Unranked"} />
            <p className=" font-extrabold p-2">|</p>
            <DetailComp detail={anime.episodes ? `${anime.episodes} ep` : "?   ep"} />
        </div>


        <div className="flex flex-col items-center mt-3">
            <p className="text-2xl">~  Genres  ~</p>
            <div className="flex flex-wrap mt-3">
                {anime.genres.length != 0 ? anime.genres.map((gen, index) => <div key={index} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-1 rounded-xl mx-[0.3rem] mt-[0.3rem] text-black_first_theme">{gen.name}</div>) 
                :
                 <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-1 rounded-xl mx-[0.3rem] mt-[0.3rem] text-black_first_theme">No specified genres</div>}
            </div>

        </div>


        <EditAnimeStatus numberOfEpisodes={anime.episodes} />

    </div>
    )
}