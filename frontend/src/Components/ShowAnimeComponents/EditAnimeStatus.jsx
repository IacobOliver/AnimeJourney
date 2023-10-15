
import React from "react";
import { useState, useRef } from "react";


export default function EditAnimeStatus({numberOfEpisodes}){
    const [score, setScore] = useState(0)
    const [status, setStatus] = useState(0)

    const [effect, setEffect] = useState(false);


    const Option = ({ text, id }) => {
        return (<option value={id} className=" bg-black_second_theme p-2">{text}</option>)
    }


    return (
        <div className="flex flex-col  mt-4 text-fifth_color_theme ">

        <div className="flex items-center mb-1 w-full" >
        <div className={` bg-center bg-cover h-14 w-14 rounded-l-lg ${effect && "animate-icon-pop-in"}`} onAnimationEnd={() => setEffect(false)} style={{ backgroundImage: `url(../../../public/icons/${score}.jpg)` }}></div>
        <select value={score} onChange={(e) =>{ setScore(e.target.value), setEffect(true)}} className="bg-black_second_theme hover:bg-black_first_theme duration-300 w-full border border-black_second_theme rounded-r-lg h-14 focus:border-black_second_theme focus:ring-0">
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

        <div className="flex flex-col">
        <select value={status} onChange={(e) =>  setStatus(e.target.value)} className="mr-1 hover:bg-black_first_theme bg-black_second_theme mb-1 border border-black_second_theme rounded-lg h-14 focus:border-black_second_theme focus:ring-0 w-full">
            <Option id={0} text={"Plan To Watch"} />
            <Option id={1} text={"Watching"} />
            <Option id={2} text={"Completed"} />
            <Option id={3} text={"On-Hold"} />
            <Option id={4} text={"Dropped"} />
        </select>

        <div className="bg-black_second_theme group hover:bg-black_first_theme flex w-full h-14 items-center border border-black_second_theme rounded-xl px-3 ">
            <p>Episodes : </p>
            <input className="bg-black_second_theme group-hover:bg-black_first_theme borber border-0 focus:border-none focus:ring-0 w-12 text-right p-1" type="number" defaultValue={0} />
            <p className="flex"> / {numberOfEpisodes ? numberOfEpisodes : "?"}</p>
            {/* <i class="fa-solid fa-video"></i> */}
        </div>
        </div>

    </div>
    )
}