import React from "react";
import RatingStarts from "../ExploreComponents/RatingStars";
import EditAnimeStatus from "./EditAnimeStatus";


export default function FastDetails({ anime, className }) {


    const DetailComp = ({ detail }) => {
        return (
            <div className="bg-[rgba(0,0,0,0.7)] md:bg-black_second_theme backdrop-blur-sm rounded-lg w-full flex items-center justify-center">
                <p className="text-center">{detail}</p>
            </div>)
    }


    return (
        <div className={className} style={{ backgroundImage: `url(${anime.images.jpg.large_image_url})` }}  >
           
            <div className="z-0 h-full w-full absolute bg-[rgba(0,0,0,0.6)]  top-0 left-0 rounded-lg md:hidden"></div>

            <p className="z-10 font-fantasy text-3xl tracking-wide text-center mt-3 line-clamp-3">{anime.title}</p>
            <div className="z-10 my-1"><RatingStarts rating={anime.score} members={anime.scored_by} positionClass="items-center" pClass="bg-[rgba(0,0,0,0.5)] backdrop-blur-sm mt-1 p-2 rounded-lg md:bg-transparent md:mt-0 md:p-0  md:text-[rgb(100,100,100)]"/></div>

            <div className="flex justify-around z-10 my-3">
                <DetailComp detail={anime.type ? anime.type : "Unknown"} />
                <p className=" font-extrabold p-2">|</p>
                <DetailComp detail={anime.rank ? `Rank #${anime.rank}` : "Unranked"} />
                <p className=" font-extrabold p-2">|</p>
                <DetailComp detail={anime.episodes ? `${anime.episodes} ep` : "?   ep"} />
            </div>


            <div className="flex flex-col items-center z-10 mt-3">
                <p className="text-2xl">~  Genres  ~</p>
                <div className="flex flex-wrap mt-3">
                    {anime.genres.length != 0 ? anime.genres.map((gen, index) => <div key={index} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-1 rounded-xl mx-[0.3rem] mt-[0.3rem] text-black_first_theme">{gen.name}</div>)
                        :
                        <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-1 rounded-xl mx-[0.3rem] mt-[0.3rem] text-black_first_theme">No specified genres</div>}
                </div>

            </div>


            <EditAnimeStatus numberOfEpisodes={anime.episodes} anime={anime} />

        </div>
    )
}