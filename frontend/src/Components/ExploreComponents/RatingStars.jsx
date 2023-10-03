import React from "react"


const StartElement = () => {
    return (
        <div className="h-5 w-5 relative ">
            <div className="h-full w-full flex items-center justify-center">
                <i className="fa-solid fa-star"></i>
            </div>
        </div>
    )
}

const HalfStartElement = () => {
    return (
        <div className="h-5 w-5 relative ">
            <div className="h-full w-full flex items-center justify-center"> <i className="fa-solid fa-star"></i></div>
            <div className="z-10 w-1/2 h-full right-0 top-0 absolute bg-black_first_theme"></div>
        </div>
    )
}

export default function RatingStarts({ rating, members }) {
    let ratingArray = []
    for (let i = 1; i <= Math.floor(rating); i++) {
        ratingArray.push(i)
    }
    let pointDifference = (ratingArray.length - rating) * (-1)

    return (<div className="flex items-center justify-center my-1">

        <div className="text-forth_color_theme flex">
            {ratingArray.map(item => <StartElement key={item} />)}
            {pointDifference >= 0.5 ? <HalfStartElement /> : null}
        </div>

        <p className="text-gray-500 font-semibold ml-3">{rating} from {members} reviews</p>

    </div>)
}