import React from "react";

export default function AnimeCarrousel() {


    const SlideIndicator = ({ arriaCurrent, ariaLabel, dataCarouselSlide }) => {
        return <button type="button" className="w-3 h-3 rounded-full" aria-current={arriaCurrent} aria-label={ariaLabel} data-carousel-slide-to={dataCarouselSlide}></button>
    }

    const Item = ({ src }) => {
        return (
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={src} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
        )
    }

    return (
        <>

            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                {/* <!-- Carousel wrapper --> */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                    <Item src="public\animejourney-low-resolution-logo-color-on-transparent-background.png" />
                    <Item src="public\animejourney-low-resolution-logo-color-on-transparent-background.png" />
                    <Item src="public\animejourney-low-resolution-logo-color-on-transparent-background.png" />
                    <Item src="public\animejourney-low-resolution-logo-color-on-transparent-background.png" />


                    <Item src="public\animejourney-low-resolution-logo-color-on-transparent-background.png" />
                </div>
                {/* <!-- Slider indicators --> */}
                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <SlideIndicator arriaCurrent="true" ariaLabel="Slide 1" dataCarouselSlide={"0"} />
                    <SlideIndicator arriaCurrent="false" ariaLabel="Slide 2" dataCarouselSlide={"1"} />
                    <SlideIndicator arriaCurrent="false" ariaLabel="Slide 3" dataCarouselSlide={"2"} />
                    <SlideIndicator arriaCurrent="false" ariaLabel="Slide 4" dataCarouselSlide={"3"} />
                    <SlideIndicator arriaCurrent="false" ariaLabel="Slide 5" dataCarouselSlide={"4"} />
                </div>


            </div>

        </>
    )
}



{/* <!-- Slider controls --> */ }
{/* <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button> */}