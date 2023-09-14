import { Carousel, IconButton } from "@material-tailwind/react";
import { useEffect, useState } from "react"

export default function CarouselCustomNavigation() {
    const [topAnime, setTopAnime] = useState(null)
    const [randomAnime, setRandomAnime] = useState([])


    useEffect(() => {
        fetch("https://api.jikan.moe/v4/top/anime")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTopAnime(data.data);

                let randomIndexes = giveRandomDistinctIndexes(data.data.length, 10)
                let chosenAnime = []


                const makeRequestWithDelay = (index) => {
                    if (index < randomIndexes.length) {
                      const mal_id = data.data[randomIndexes[index]].mal_id;
                      fetch(`https://api.jikan.moe/v4/anime/${mal_id}/pictures`)
                        .then((res) => res.json())
                        .then((animeImages) => {
                          // Update state with the new result
                          setRandomAnime((prevResults) => [
                            ...prevResults,
                            {
                              anime: data.data[randomIndexes[index]],
                              images: animeImages,
                            },
                          ]);

                        // chosenAnime.push(  {
                        //     anime: data.data[randomIndexes[index]],
                        //     images: animeImages,
                        //   },)
            
                          // Make the next request after a delay
                          setTimeout(() => {
                            makeRequestWithDelay(index + 1);
                          }, 1000 / 3); // 3 requests per second
                        });
                     }
                     //else{
                    //     setRandomAnime(chosenAnime)
                    // }
                  };

                  // Start making requests
                   setRandomAnime([])
                  makeRequestWithDelay(0);
            })

    }, [])


    const CarouselItem = ({ anime }) => {
        let imagesIndexes = giveRandomDistinctIndexes(anime.images.data.length, 2)
        let firstAnimeImage = anime.images.data[imagesIndexes[0]].jpg.large_image_url
        let secondtAnimeImage = anime.images.data[imagesIndexes[1]].jpg.large_image_url

        return (
            <div className="h-full w-full grid grid-cols-10 ">
                <div className=" w-full h-full col-span-3 flex justify-center overflow-hidden">
                    <div className="w-96 h-9,9/10 rounded-3xl bg-cover bg-center bg-brown-500" style={{ backgroundImage: `url(${firstAnimeImage})` }}> </div>
                </div>

                <div className="text-fifth_color_theme w-full h-full col-span-4   pt-4">
                   <h1 className="text-3xl text-center font-fantasy" >{anime.anime.title}</h1> 

                   <p className = "text-center mt-5 font-serif px-2 line-clamp-5">{anime.anime.synopsis}</p>

                    <div className="flex justify-center">
                   <button className="relative inline-flex items-center justify-center mr-2 overflow-hidden font-medium rounded-lg group 
                                bg-gradient-to-br from-orange-500 to-red-600 group-hover:from-orange-500 group-hover:to-red-600
                                 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 text-black_first_theme text-md ">
                    <span className=" flex items-center relative px-5 py-1.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 bg-forth_color_theme">
                       <p> TRAVEL </p>
        
                    </span>  
                </button>
                </div>
                  
                </div>

                <div className="w-full h-full col-span-3 flex justify-center overflow-hidden">
                    <div className="w-96 h-9,9/10 rounded-3xl bg-cover bg-center bg-brown-500" style={{ backgroundImage: `url(${secondtAnimeImage})` }}> </div>
                </div>

            </div>

        )
    }

    const giveRandomDistinctIndexes = (length, howMany) => {
        if (howMany > length) {
            console.error("cant request more than length")
            return;
        }

        let result = [];
        while (howMany > 0) {
            let randomNumber = Math.floor(Math.random() * length)
            if (!result.includes(randomNumber)) {
                result.push(randomNumber);
                howMany--;
            }
        }

        return result;
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

                {randomAnime != [] ? randomAnime.map((anime, index) => <CarouselItem key={index} anime={anime} />) : <></>}

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