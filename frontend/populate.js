

let numberOfPages = 1;
let anime = []

const populateTopAnime = () => {

    const getTopAnimePages = (index) => {
        if (index > 0) {
            fetch(`https://api.jikan.moe/v4/top/anime?page=${1}`)
                .then(res => res.json())
                .then(data => {
                    console.log(anime.length)
                    
                    data.data.map( item => anime.push({
                        animeId : item.mal_id,
                        name : item.title,
                        rating : item.score,
                        numberOfReviews : item.scored_by,
                        animeDescription : item.synopsis,
                        images : null
                    }))
                })
                .catch(err => console.error(err))

            setTimeout(() => {
                getTopAnimePages(index - 1)
            }, 1000)
        } else {
            fetch("http://localhost:8080/topAnime/addAnime", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(anime)
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }
    }

    getTopAnimePages(numberOfPages);

}




populateTopAnime()
