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
      method : "GET",
      headers : {
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


    return (
      <div className="h-full w-full grid grid-cols-10">
        {/* Left Image */}
        <div className=" w-full h-full col-span-3 flex justify-center overflow-hidden">
          <div className="w-96 h-9,9/10 rounded-3xl bg-cover bg-center bg-brown-500" style={{ backgroundImage: `url(${firstAnimeImage})` }}> </div>
        </div>


        {/* Center */}
        <div className="text-fifth_color_theme w-full h-full col-span-4 pt-4 flex flex-col justify-around ">
          <div>
            <h1 className="titleSize text-center font-fantasy line-clamp-3" >{anime.name}</h1>

            <RatingStarts rating={anime.rating} members={anime.numberOfReviews} />

            <p className="text-center text-lg mt-8 font-serif px-2 line-clamp-5">{anime.animeDescription}</p>
          </div>


          <div className="flex justify-center">
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
        <div className="w-full h-full col-span-3 flex justify-center overflow-hidden">
          <div className="w-96 h-9,9/10 rounded-3xl bg-cover bg-center bg-brown-500" style={{ backgroundImage: `url(${secondtAnimeImage})` }}> </div>
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
    topAnime ? <div className="w-screen h-134 px-5 flex justify-center mt-4">
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
    </div> : <Loading/>
  );
}