import React from "react";
import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import state from "../Atom";
import AnimeCard from "./AnimeCard";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";

export default function AnimeList() {
    const [animeNewSeasons, setAnimeNewSeasons] = useState(null)
    const [newSeasonPage, setNewSeasonPage] = useAtom(state.newSeasonPage);
    const [[filter, filterValue], setFilter] = useAtom(state.newSeasonFilter)


    useEffect(() => {
        fetch(`http://localhost:8080/newAnimeSeasons/getAnime`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                page: newSeasonPage,
                numberOfItems: 12,
                filter: filter,
                filterValue: filterValue
            })
        })
            .then(res => res.json())
            .then(data => {
                setAnimeNewSeasons(data)
            })
    }, [newSeasonPage])


    const FilterButton = ({ name }) => {
        return <button onClick={(e) => selectFilter(e.target.textContent)} className={`${filterValue == name ? "bg-black_second_theme md:text-white" : ""} w-full md:w-auto text-sm lg:text-base text-fifth_color_theme md:text-gray-500 hover:text-forth_color_theme md:hover:text-fifth_color_theme font-fantasy tracking-wide p-2 lg:p-3 mx-0 md:mx-1 rounded-lg`}>{name}</button>
    }

    const selectFilter = (fValue) => {
        if (fValue == "Special") {
            setFilter(["anime_type", "Special"])
            setNewSeasonPage(Math.random())
        } else if (fValue == "ONA") {
            setFilter(["anime_type", "ONA"])
            setNewSeasonPage(Math.random())
        } else if (fValue == "TV") {
            setFilter(["anime_type", "TV"])
            setNewSeasonPage(Math.random())
        } else if (fValue == "Movie") {
            setFilter(["anime_type", "Movie"])
            setNewSeasonPage(Math.random())
        } else if (fValue == "Most Recent") {
            setFilter(["aired_from", "Most Recent"])
            setNewSeasonPage(Math.random())
        } else if (fValue == "All") {
            setFilter(["", "All"])
            setNewSeasonPage(Math.random())
        }
    }



    const nextPage = (e) => {
        if (animeNewSeasons.length < 12) {
            return
        }
        setNewSeasonPage(newSeasonPage + 1);
    }

    const previosPage = (e) => {
        if (Math.floor(newSeasonPage) == 0) {
            console.log("no room ");
            return
        }
        setNewSeasonPage(newSeasonPage - 1);
    }

    return (
        <div className="text-white h-auto col-span-10 xl:col-span-6 2xl:col-span-7 p-3 ">
            <div className="  h-14 flex items-center justify-between bg-[rgb(15,15,15)] rounded-xl">
                <div className="flex items-center">

                    <p className="text-xl xl:text-2xl text-fifth_color_theme font-fantasy tracking-wide p-4">New Anime Seasons</p>

                    <i onClick={previosPage} className="fa-solid fa-angle-left text-lg lg:text-2xl cursor-pointer hover:bg-black_second_theme p-2 lg:p-3 rounded-lg h-10 w-10 flex items-center justify-center"></i>
                    <i onClick={nextPage} className="fa-solid fa-angle-right text-lg lg:text-2xl  cursor-pointer  hover:bg-black_second_theme p-2 lg:p-3 rounded-lg  h-10 w-10 flex items-center justify-center"></i>
                </div>

                <div className="flex items-center mr-5">
                    <div className=" md:hidden">
                        <Menu
                            animate={{
                                mount: { y: 0 },
                                unmount: { y: 25 },
                            }}
                        >
                            <MenuHandler>
                                <Button className=" bg-forth_color_theme text-black_first_theme font-fantasy font-thin tracking-wider text-base hover:bg-third_color_theme hover:text-fifth_color_theme py-2"> Filters</Button>
                            </MenuHandler>
                            <MenuList className="transparentBackground backdrop-blur-md border-0 ">
                                <MenuItem className="p-0 focus:bg-black_second_theme hover:bg-black_second_theme"> <FilterButton name="All" /> </MenuItem>
                                <MenuItem className="p-0 focus:bg-black_second_theme hover:bg-black_second_theme"> <FilterButton name="Special" /> </MenuItem>
                                <MenuItem className="p-0 focus:bg-black_second_theme hover:bg-black_second_theme"> <FilterButton name="ONA" /> </MenuItem>
                                <MenuItem className="p-0 focus:bg-black_second_theme hover:bg-black_second_theme"> <FilterButton name="TV" /> </MenuItem>
                                <MenuItem className="p-0 focus:bg-black_second_theme hover:bg-black_second_theme"> <FilterButton name="Movie" /> </MenuItem>
                                <MenuItem className="p-0 focus:bg-black_second_theme hover:bg-black_second_theme"> <FilterButton name="Most Recent" /></MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                    <div className="hidden md:flex items-center">
                        <FilterButton name="All" />
                        <FilterButton name="Special" />
                        <FilterButton name="ONA" />
                        <FilterButton name="TV" />
                        <FilterButton name="Movie" />
                        <FilterButton name="Most Recent" />
                    </div>
                </div>
            </div>


            <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-4 px1450:grid-cols-6 gap-4 mt-2">

                {animeNewSeasons?.map((anime, index) => <AnimeCard key={index} image={anime.image} title={anime.name} airedFrom={anime.airedFrom} type={anime.animeType} animeId={anime.animeId} />)}

            </div>
        </div>)
}