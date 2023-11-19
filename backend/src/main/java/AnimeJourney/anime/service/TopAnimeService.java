package AnimeJourney.anime.service;

import AnimeJourney.anime.model.FetchResponse;
import AnimeJourney.anime.repository.TopAnimeRepository;
import AnimeJourney.anime.model.TopAnime;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class TopAnimeService {

    private final TopAnimeRepository topAnimeRepository;

    public List<TopAnime> getRandomAnime(int howMany){
        Set<Long> indexToken = new HashSet<>();
        Random random = new Random();

        while(howMany > 0){
            int randomNumber = random.nextInt(250) + 1;
            if(!indexToken.contains(randomNumber)){
                indexToken.add((long) randomNumber);
                howMany--;
            }
        }
        return topAnimeRepository.findAllById(indexToken);
    }

    public FetchResponse postAnimeList(List<TopAnime> topAnime){
        topAnimeRepository.saveAll(topAnime);
        return FetchResponse.builder().response("POPULATE DONE").build();
    }
}
