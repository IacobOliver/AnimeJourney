

let numberOfPages = 10;
let anime = []


const extractImages = (imagesObject) =>{
   return imagesObject.data.map( item => item.jpg.large_image_url)
}

const populateTopAnime = () => {

    const getTopAnimePages = (numberOfPages) => {
        if (numberOfPages > 0) {
            fetch(`https://api.jikan.moe/v4/top/anime?page=${numberOfPages}`)
                .then(res => res.json())
                .then(data => {
                    console.log("NEW PAGE -------------------------------------------------------", numberOfPages)

                    const getImagesForAnime = (animeObjectIndex) =>{
                        if(animeObjectIndex >= 0){
                            fetch(`https://api.jikan.moe/v4/anime/${data.data[animeObjectIndex].mal_id}/pictures`)
                            .then(res => res.json())
                            .then(animeImages =>{
                                console.log(extractImages(animeImages), " from anime " , data.data[animeObjectIndex].title)
                                anime.push({
                                    animeId : data.data[animeObjectIndex].mal_id,
                                    name : data.data[animeObjectIndex].title,
                                    rating : data.data[animeObjectIndex].score,
                                    numberOfReviews : data.data[animeObjectIndex].scored_by,
                                    animeDescription : data.data[animeObjectIndex].synopsis,
                                    images : extractImages(animeImages)
                                })
                            })
                            .catch(err => comsole.error(err))

                            setTimeout(() =>{
                                getImagesForAnime(animeObjectIndex -1)
                            },1000)

                        }else{
                            setTimeout(() => {
                                getTopAnimePages(numberOfPages - 1)
                            }, 1000)
                        }
                    }

                    getImagesForAnime(data.data.length -1)

                })
                .catch(err => console.error(err))

           
        } else {
            console.log("fetch")
            fetch("http://localhost:8080/topAnime/addAnime", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(anime)
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
        }
    }

    getTopAnimePages(numberOfPages);

}




populateTopAnime()
