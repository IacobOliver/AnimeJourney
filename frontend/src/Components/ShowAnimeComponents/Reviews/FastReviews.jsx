import React from "react";
import Review from "./Review";
import { Button } from "@material-tailwind/react";

export default function FastReviews() {
    return (
        <div className=" col-span-2 px-3 ">
            <div className="flex">
            <p className="col-span-4 text-2xl sm:text-3xl font-fantasy ml-3"> Reviews</p>
            
            <Button  variant="text" className="flex items-center gap-2 text-forth_color_theme   ml-3 duration-300  font-bold tracking-wide text-sm py-2 px-3 border-b border-b-transparent hover:border-b-forth_color_theme rounded-none ">
                Write a review
            </Button>
            </div>

            <Review userName={"olii"} comment="This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights." />
            <Review userName={"Andreiutu"} comment="Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!" />
            <Review userName={"luffy "} comment="I love how versatile this bag is. It can hold anything ranging from cookies that come in trays to cookies that come in tins." />
            <Review userName={"oljojoii"} comment="I love how versatile this bag is. It can hold anything ranging from cookies that come in trays to cookies that come in tins." />



            <Button  variant="text" className="flex items-center gap-2 text-black_first_theme bg-forth_color_theme hover:bg-third_color_theme hover:text-fifth_color_theme ml-3 duration-300 font-fantasy font-normal tracking-wide text-sm sm:text-lg py-2 px-3">
                See more
                <i className="fa-solid fa-arrow-right"></i>
            </Button>

        </div>
    )
}