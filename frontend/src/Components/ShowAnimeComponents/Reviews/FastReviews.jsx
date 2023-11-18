import React from "react";
import Review from "./Review";
import { Button } from "@material-tailwind/react";

export default function FastReviews() {
    return (
        <div className=" col-span-2 px-3 ">
            <p className="col-span-4 text-2xl sm:text-3xl font-fantasy ml-3">Opinions and Reviews</p>

            <Review userName={"olii"} comment="This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights." />
            <Review userName={"Andreiutu"} comment="Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!" />
            <Review userName={"luffy "} comment="I love how versatile this bag is. It can hold anything ranging from cookies that come in trays to cookies that come in tins." />
            <Review userName={"oljojoii"} comment="I love how versatile this bag is. It can hold anything ranging from cookies that come in trays to cookies that come in tins." />

            <Button  variant="text" className="flex items-center gap-2 text-black_first_theme bg-forth_color_theme hover:bg-third_color_theme hover:text-fifth_color_theme ml-3 duration-300 font-fantasy font-normal tracking-wide text-sm sm:text-lg py-2 px-3">
                See more
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                </svg>
            </Button>

        </div>
    )
}