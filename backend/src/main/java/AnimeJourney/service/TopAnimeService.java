package AnimeJourney.service;

import AnimeJourney.model.TopAnime;
import AnimeJourney.repository.TopAnimeRepository;
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
            int randomNumber = random.nextInt(20) + 1;
            if(!indexToken.contains(randomNumber)){
                System.out.println(randomNumber);
                indexToken.add((long) randomNumber);
                howMany--;
            }
        }
        return topAnimeRepository.findAllById(indexToken);
    }

    public String postAnimeList(List<TopAnime> topAnime){
        topAnimeRepository.saveAll(topAnime);
        return "done";
    }
}
