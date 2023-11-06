import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import state from "../Components/Atom";
import Loading from "../Components/Loading";
import InfiniteScroll from 'react-infinite-scroll-component';


export default function AnimeList() {
    const [user, setUser] = useAtom(state.user)
    const [usersAnime, setUsersAnime] = useState([])
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const QUANTITY = 10;

    useEffect(() => {
        if (user)
            fetch(`http://localhost:8080/savedAnimeUserDetails?userId=${user.id}&pageNr=${page}&quantity=${QUANTITY}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.length < QUANTITY) {
                        setHasMore(false);
                    }
                    console.log(data);
                    setUsersAnime([...usersAnime, ...data]);
                })
    }, [page, user])


    const CostumButton = ({ text }) => {
        return (
            <button className=" mx-1  text-yellow-400 border border-yellow-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span className="bg-yellow-400 shadow-yellow-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                {text}
            </button>
        )
    }


    const AnimeUserCard = ({ animeDetails, index }) => {
        let color; 
       switch(animeDetails.status){
        case 0 : color = "bg-gray-500"; break;
        case 1 : color = "bg-green-500"; break;
        case 2 : color = "bg-blue-500"; break;
        case 3 : color = "bg-yellow-500"; break;
        case 4 : color = "bg-red-500"; break;
       }

        return (
            <div className="flex items-center w-full h-24 bg-black_second_theme text-fifth_color_theme my-3 rounded-lg">
                <div className={` flex items-center justify h-full w-3 p-1 rounded-l-lg ${color}`}></div>
                <p className="mx-3" > {index + 1}</p>
                <img className="h-full" src = {animeDetails.savedAnimeFrontDetails.image}/>
                <p className=" mx-2 text-xl w-[20rem] truncate"> {animeDetails.savedAnimeFrontDetails.title} </p>
                <p className="mx-3">{animeDetails.myScore == 0 ? " - " : animeDetails.myScore}</p>
                <p  className="mx-3">{animeDetails.savedAnimeFrontDetails.type}</p>
                <p className="mx-3"></p>

                <div className="flex">
                    {animeDetails.status != 2 ?
                        <input className="w-10" defaultValue={animeDetails.watchedEpisodes} />
                        :
                        <p> {animeDetails.watchedEpisodes}</p>
                    }
                    <p> / {animeDetails.savedAnimeFrontDetails.episodesCount} </p>
                </div>
            </div>
        )
    }


    return (
        <InfiniteScroll className="mt-3 custom-scrollbar"
            style={{ height: "screen" }}
            dataLength={usersAnime.length}
            next={() => {
                setPage(page + 1)
            }}
            hasMore={hasMore} // Replace with a condition based on your data source
            height={""}
            endMessage={<p className="bg-pink-400">No more data to load.</p>}
        >
            <div className="w-screen  flex flex-col justify-center items-center mt-5 p-3 font-fantasy tracking-wide">

                <div className="bg-[rgb(15,15,15)]  flex flex-col justify-center items-center w-5/6 rounded-xl">
                    <p className=" text-third_color_theme text-6xl">Anime List</p>
                    <img draggable={false} src="public\animejourney-low-resolution-logo-color-on-transparent-background.png" className=" w-5/6 my-5" />
                </div>
                <div className="my-3 ">
                    <CostumButton text={"All Anime"} />
                    <CostumButton text={"Completed"} />
                    <CostumButton text={"Watching"} />
                    <CostumButton text={"Plan To Watch"} />
                    <CostumButton text={"On Hold"} />
                    <CostumButton text={"Dropped"} />
                </div>

                <div className="bg-[rgb(15,15,15)] flex items-center justify-center  w-5/6 h-24 text-5xl rounded-xl" >
                    All Anime
                </div>

                <div className="w-5/6">
                    {usersAnime ?
                        usersAnime.map((anime, index) => <AnimeUserCard key={index} animeDetails={anime} index={index} />)
                        :
                        <Loading />
                    }
                </div>




            </div>
        </InfiniteScroll>

    )
}