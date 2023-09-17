package AnimeJourney.service;

import AnimeJourney.model.TopAnime;
import AnimeJourney.repository.TopAnimeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TopAnimeService {

    private final TopAnimeRepository topAnimeRepository;

    public List<TopAnime> getRandomAnime(){
        return topAnimeRepository.findAll();
    }

    public String postAnimeList(List<TopAnime> topAnime){
        topAnimeRepository.saveAll(topAnime);

        return "done";
    }
}
