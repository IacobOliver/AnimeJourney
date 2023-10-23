
import { useAtom } from "jotai";
import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import state from "../Atom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


export default function EditAnimeStatus({ numberOfEpisodes }) {
    const [score, setScore] = useState(0)
    const [status, setStatus] = useState(0)
    const [effect, setEffect] = useState(false);
    const [isUserAnime, setIsUserAnime] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useAtom(state.isLoggedIn)
    const [refresh , setRefresh] = useAtom(state.refreshAnime)

    const navigate = useNavigate();
    const params = useParams();


    const Option = ({ text, id }) => {
        return (<option value={id} className=" bg-black_second_theme p-2">{text}</option>)
    }



    useEffect(() => {
        
            fetch(`http://localhost:8080/savedAnimeUserDetails/userHaveAnime/${params.id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setIsUserAnime(data);
                })
        
    }, [refresh])


    return (
        <div className="flex flex-col  mt-4 text-fifth_color_theme relative">
            {!isLoggedIn && <div onClick={() => navigate("/logIn")} className="absolute h-full w-full z-10"></div>}



            <div className="flex flex-col">

                {isUserAnime ?
                    <select value={status} onChange={(e) => setStatus(e.target.value)} className="mr-1 hover:bg-black_first_theme bg-black_second_theme mb-1 border border-black_second_theme rounded-lg h-14 focus:border-black_second_theme focus:ring-0 w-full">
                        <Option id={0} text={"Plan To Watch"} />
                        <Option id={1} text={"Watching"} />
                        <Option id={2} text={"Completed"} />
                        <Option id={3} text={"On-Hold"} />
                        <Option id={4} text={"Dropped"} />
                    </select>
                    :
                    <div className="flex justify-center mb-1">
                        <button className="relative inline-flex items-center justify-center mr-2 overflow-hidden font-medium rounded-lg group 
                                bg-gradient-to-br from-orange-500 to-red-600 group-hover:from-orange-500 group-hover:to-red-600
                                 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 text-black_first_theme text-md ">
                            <span className=" flex items-center relative px-5 py-1.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 bg-forth_color_theme font-medium">
                                <p className="text-2xl mr-2"> + </p>
                                <p aria-disabled="true"> Add to list </p>

                            </span>
                        </button>
                    </div>
                }

                <div className="bg-black_second_theme group mb-1 hover:bg-black_first_theme flex w-full h-14 items-center border border-black_second_theme rounded-xl px-3 ">
                    <p>Episodes : </p>
                    <input className="bg-black_second_theme group-hover:bg-black_first_theme borber border-0 focus:border-none focus:ring-0 w-12 text-right p-1" type="number" defaultValue={0} />
                    <p className="flex"> / {numberOfEpisodes ? numberOfEpisodes : "?"}</p>
                    {/* <i class="fa-solid fa-video"></i> */}
                </div>
            </div>

            <div className="flex items-center justify-center w-full" >
                <div className={` bg-center bg-cover h-14 w-14 rounded-l-lg ${effect && "animate-icon-pop-in"}`} onAnimationEnd={() => setEffect(false)} style={{ backgroundImage: `url(../../../public/icons/${score}.jpg)` }}></div>
                <select value={score} onChange={(e) => { setScore(e.target.value), setEffect(true) }} className="bg-black_second_theme hover:bg-black_first_theme duration-300 w-full border border-black_second_theme rounded-r-lg h-14 focus:border-black_second_theme focus:ring-0">
                    <Option id={0} text={"SELECT"} />
                    <Option id={1} text={"1 ( Appalling )"} />
                    <Option id={2} text={"2 ( Horrible )"} />
                    <Option id={3} text={"3 ( Very Bad )"} />
                    <Option id={4} text={"4 ( Bad )"} />
                    <Option id={5} text={"5 ( Average )"} />
                    <Option id={6} text={"6 ( Fine )"} />
                    <Option id={7} text={"7 ( Good )"} />
                    <Option id={8} text={"8 ( Very Good )"} />
                    <Option id={9} text={"9 ( Great )"} />
                    <Option id={10} text={"10 ( MASTERPIECE )"} />
                </select>


            </div>

        </div>
    )
}