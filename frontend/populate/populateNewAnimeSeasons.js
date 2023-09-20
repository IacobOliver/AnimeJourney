

let numberOfPages;
let anime = []

const extractDetailsFromPage = (animeList, pageNumber) =>{
    console.log("----------------------------------------------------PAGE ",pageNumber)
    animeList.map( item => anime.push({
        animeId : item.mal_id,
        name : item.title,
        image : item.images.jpg.image_url,
        airedFrom : item.aired.from.substring(0,10),
        animeType : item.type
    }))
    
}

const populateNewSesonAnime = () => {
    fetch(`https://api.jikan.moe/v4/seasons/now?page=${1}`)
    .then(res => res.json())
    .then(data => {
        numberOfPages = data.pagination.last_visible_page;
        extractDetailsFromPage(data.data, 1)
        getNewSesonAnime(numberOfPages);
    })
    .catch(err => console.error(err))


    const getNewSesonAnime = (numberOfPages) => {
        if (numberOfPages > 1) {
            fetch(`https://api.jikan.moe/v4/seasons/now?page=${numberOfPages}`)
                .then(res => res.json())
                .then(data => {
                    extractDetailsFromPage(data.data, numberOfPages)
                  
                    setTimeout(() =>{
                        getNewSesonAnime(numberOfPages -1)
                    },1000)

                })
                .catch(err => console.error(err)) 
        } else {
            console.log("fetch")
            fetch("http://localhost:8080/newAnimeSeasons/addAnimes", {
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

    

}




populateNewSesonAnime()
