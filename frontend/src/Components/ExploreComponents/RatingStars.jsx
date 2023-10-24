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
            <div className="h-full w-full flex items-center justify-center">  <i class="fa-solid fa-star-half"></i></div>
           
        </div>
    )
}

export default function RatingStarts({ rating, members }) {
    let ratingArray = []
    for (let i = 1; i <= Math.floor(rating); i++) {
        ratingArray.push(i)
    }
    let pointDifference = (ratingArray.length - rating) * (-1)

    return (<div className="flex items-start my-5 px-3 font-sans flex-col md:my-2 md:items-center">

        <div className="text-forth_color_theme flex">
            {ratingArray.map(item => <StartElement key={item} />)}
            {pointDifference >= 0.5 ? <HalfStartElement /> : null}
        </div>

        <p className="text-gray-500 font-semibold">{rating ? rating : "N/A"} from {members ? members : " - "} reviews</p>
      

    </div>)
}