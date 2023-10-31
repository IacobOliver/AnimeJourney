import { Carousel, IconButton } from "@material-tailwind/react";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";
import { Utils } from "../Utils";
import RatingStarts from "./RatingStars";
import { useAtom } from "jotai";
import state from "../Atom";

export default function CarouselCustomNavigation() {
  const [topAnime, setTopAnime] = useState(null)
  const [play, setPlay] = useAtom(state.play);
  const [mute, setMute] = useAtom(state.mute)
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/topAnime/getRandomAnime/10", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log("RANDOM ANIME: ", data)
        setTopAnime(data);
      })
  }, [])


  const CarouselItem = ({ anime }) => {
    let imagesIndexes = Utils.giveRandomDistinctIndexes(anime.images.length, 2)
    let firstAnimeImage = anime.images[imagesIndexes[0]]
    let secondtAnimeImage = anime.images[imagesIndexes[1]]

    //sm : 540px
    //md : 720px
    //lg : 960px
    //xl : 1140px
    //2xl : 1320px

    return (
      <div className="h-full grid grid-cols-10 relative">
        {/* Left Image */}
        <div className="h-full grid-cols-none flex justify-center overflow-hidden md:h-134 md:col-span-4 xl:col-span-3 relative">
          <div className="w-0 h-0 rounded-3xl bg-cover bg-center md:w-96 md:h-full " style={{ backgroundImage: `url(${firstAnimeImage})` }}> </div>
        </div>

        {/* md:w-96 md:h-9,9/10 */}

        {/* Center */}
        <div className="text-fifth_color_theme h-134 col-span-10 pt-4 flex flex-col bg-center bg-cover relative
                         md:justify-around  md:h-full md:col-span-6 md:!bg-none
                        xl:col-span-4" style={{ backgroundImage: `url(${firstAnimeImage})` }}>
          <div className="w-full h-full absolute top-0 transparentBackground z-0 md:hidden"></div>
          <div className="z-30">
            <h1 className="text-5xl mt-10 px-3 text-left font-fantasy line-clamp-3 md:mt-0 md:px-0 md:text-center xl:text-6xl" >{anime.name}</h1>

            <RatingStarts rating={anime.rating} members={anime.numberOfReviews} positionClass="items-start md:items-center" pClass="text-gray-500"/>

            <p className="text-left text-lg mt-8 font-serif px-14 line-clamp-5 md:text-center sm:px-10 md:px-5">{anime.animeDescription}</p>
          </div>


          <div className="flex justify-center mt-7 md:mt-0">
            <button
              onClick={() => handleTravel(anime.animeId)}
              className="relative inline-flex items-center justify-center mr-2 overflow-hidden font-medium rounded-lg group 
                                bg-gradient-to-br from-orange-500 to-red-600 group-hover:from-orange-500 group-hover:to-red-600
                                 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 text-black_first_theme text-md
                                 w-1/3 h-12 ">
              <span className="w-full h-full flex justify-center items-center relative px-5 py-1.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 bg-forth_color_theme">
                <p className="font-fantasy text-2xl"> TRAVEL </p>
              </span>
            </button>
          </div>


        </div>


        {/* Right Image */}
        <div className="w-full h-full grid-cols-none flex justify-center overflow-hidden xl:col-span-3">
          <div className="h-0 w-0 rounded-3xl bg-cover bg-center xl:w-96 xl:h-9,9/10 " style={{ backgroundImage: `url(${secondtAnimeImage})` }}> </div>
        </div>

      </div>

    )
  }

  const handleTravel = (animeId) => {
    setPlay(true)
    setMute(false)
    navigate(`/anime/${animeId}`)
  }


  return (
    topAnime ? <div className="w-screen h-134 px-0  flex justify-center mt-4 md:px-5">
      <Carousel
        className="rounded-xl w-9,9/10"
        autoplay={true}
        loop={true}
        number={100}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-gray-500" : "w-4 bg-gray-800"
                  }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}

      >

        {topAnime ? topAnime.map((item, index) => <CarouselItem key={index} anime={item} />) : <Loading />}

      </Carousel>
    </div> : <Loading />
  );
}