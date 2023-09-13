import { Carousel} from "@material-tailwind/react";

export default function CarouselCustomNavigation() {


    const CarouselItem = ({imgSrc}) => {
        return (
          <div className = "h-full w-full grid grid-cols-10 ">
            <div className="bg-black_second_theme w-full h-full col-span-4">

            </div>
            <div className="bg-gray-900 w-full h-full col-span-6 flex justify-center">
                <div className="w-9,9/10 h-5/6 bg-yellow-100 mt-3 rounded-3xl">
                {/* <img
                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                    alt="image 3"
                    className="max-width-full max-h-full object-cover rounded-3xl"
                /> */}
                </div>
            </div>

          </div>
       
        )
    }


    return (
        <div className="w-screen h-134 px-5 flex justify-center mt-3">
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
                    <div></div>
                )}
                
            >
                 <CarouselItem imgSrc="\public\animejourney-low-resolution-logo-color-on-transparent-background.png"/>
                
                
                {/* <img
                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                    alt="image 3"
                    className="h-full w-full object-cover"
                /> */}
               

            </Carousel>
        </div>
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