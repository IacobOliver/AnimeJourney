import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import state from "../Components/Atom";
import Loading from "../Components/Loading";


export default function AnimeList() {
    const [user, setUser] = useAtom(state.user)
    const [usersAnime, setUsersAnime] = useState([])
    const [page ,setPage] = useState(0);
    const  QUANTITY = 5;

    useEffect(() =>{
        if(user)
        fetch(`http://localhost:8080/savedAnimeUserDetails?userId=${user.id}&pageNr=${page}&quantity=${QUANTITY}`, {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setUsersAnime([...usersAnime, ...data]);
        })
    }, [page, user])
 

    const CostumButton = ({ text }) => {
        return (
            <button className=" mx-1 bg-yellow-950 text-yellow-400 border border-yellow-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span className="bg-yellow-400 shadow-yellow-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                {text}
            </button>
        )
    }


    const AnimeUserCard = ({animeDetails}) => {
        return (
            <div className="w-full h-96 bg-black_second_theme my-5">
                {animeDetails.savedAnimeFrontDetails.title}
            </div>
        )
    }


    return (
        <div className="w-screen flex flex-col justify-center items-center mt-5 p-3">

            <div className="flex flex-col justify-center items-center w-5/6 rounded-xl">
                <img draggable={false} src="public\animejourney-low-resolution-logo-color-on-transparent-background.png" className=" w-5/6 my-5" />
            </div>
            <div className="my-3">
                <CostumButton text={"All Anime"} />
                <CostumButton text={"Completed"} />
                <CostumButton text={"Watching"} />
                <CostumButton text={"Plan To Watch"} />
                <CostumButton text={"On Hold"} />
                <CostumButton text={"Dropped"} />
            </div>
            {usersAnime ? 
             usersAnime.map((anime, index) => <AnimeUserCard key={index} animeDetails={anime}/>) 
            :
            <Loading/> } 
           


        </div>
    )
}