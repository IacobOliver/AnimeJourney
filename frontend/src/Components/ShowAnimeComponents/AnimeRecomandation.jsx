import React from "react";
import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import state from "../Atom";
import AnimeCard from "../ExploreComponents/AnimeCard";
import Loading from "../Loading";


export default function AnimeRecomandation() {
    const [animeRec, setAnimeRec] = useState([]);
    const params = useParams();
    const [refresh, setRefresh] = useAtom(state.refreshAnime)

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/anime/${params.id}/recommendations`)
            .then(res => res.json())
            .then(data => {
                setAnimeRec(data.data)
            })

    }, [refresh])

    // image, title, airedFrom, type, animeId

    return (
        
        <div className=" grid grid-cols-8 text-fifth_color_theme mt-5">
            

            <p className="col-span-8 text-3xl font-fantasy mb-3 ml-3">Recommended if you like this anime ♥</p>

            {animeRec.length != 0 ? 
           animeRec.map((anime, index) => <AnimeCard key={index} image={anime.entry.images.jpg.image_url} title={anime.entry.title} animeId={anime.entry.mal_id}/>)
            : 
            <div className="col-span-8">
                <p className="text-center text-3xl font-fantasy tracking-wide">Can't find any recommandation</p>
                <Loading />
                </div>
        
        }
        </div>)
}