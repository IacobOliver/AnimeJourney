import { Carousel, IconButton } from "@material-tailwind/react";
import { useEffect, useState } from "react"

export default function CarouselCustomNavigation() {
    const [topAnime, setTopAnime] = useState(null)
    const [randomAnime, setRandomAnime] = useState(null)


    useEffect(() => {
        fetch("https://api.jikan.moe/v4/top/anime")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTopAnime(data.data);

                let randomIndexes = extract10Anime(data.data)
                let chosenAnime = []

                for (let i = 0; i < randomIndexes.length; i++) {
                    setTimeout(() => {
                        fetch(`https://api.jikan.moe/v4/anime/${data.data[randomIndexes[i]].mal_id}/pictures`)
                            .then(res => res.json())
                            .then(animeImages => {
                                chosenAnime.push({
                                    anime: data.data[randomIndexes[i]],
                                    images: animeImages
                                })
                                if (i == randomIndexes.length - 1) {
                                    setRandomAnime(chosenAnime)
                                }


                            })
                    }, 1000)
                    
                }

            })

    }, [])


    const extract10Anime = (animeList) => {
        let indexArray = []
        while (indexArray.length < 10) {

            let randomIndex = Math.floor(Math.random() * animeList.length)
            if (!indexArray.includes(randomIndex)) {
                indexArray.push(randomIndex);
            }
        }

        return indexArray;
    }


    const CarouselItem = ({ anime }) => {
        let randomAnimeImage = anime.images.data[ Math.floor(Math.random() * anime.images.data.length)].jpg.large_image_url
       

        return (
            <div className="h-full w-full grid grid-cols-10 ">
                <div className="bg-black_second_theme w-full h-full col-span-4">
                    {anime.anime.title}
                </div>
                <div className="bg-gray-900 w-full h-full col-span-6 flex justify-center overflow-hidden">
                    <div className="w-9,9/10 h-9,9/10 rounded-3xl overflow-hidden">
                        <img
                            src={randomAnimeImage}
                            alt="image 3"
                            className="rounded-3xl"
                        />
                    </div>
                </div>

            </div>

        )
    }


    return (
        topAnime ? <div className="w-screen h-134 px-5 flex justify-center mt-3">
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
                    <div></div>
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


                {randomAnime ? randomAnime.map((anime, index) => <CarouselItem key={index} anime={anime}/> ) : <></>}

                {/* <CarouselItem key={index} anime={anime}/> */}


            </Carousel>
        </div> : null
    );
}

{/* <IconButton
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
        </IconButton> */}