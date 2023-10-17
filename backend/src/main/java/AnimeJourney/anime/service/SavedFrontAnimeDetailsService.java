package AnimeJourney.anime.service;

import AnimeJourney.anime.model.SavedFrontAnimeDetails;
import AnimeJourney.anime.model.SavedUserAnimeDetails;
import AnimeJourney.anime.repository.SavedFrontAnimeDetailsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SavedFrontAnimeDetailsService {
    private final SavedFrontAnimeDetailsRepository savedFrontAnimeDetailsRepository;


    public void saveAnime(SavedFrontAnimeDetails anime) {
        SavedFrontAnimeDetails savedFrontAnimeDetails = savedFrontAnimeDetailsRepository.findByAnimeId(anime.getAnimeId());
//
//        if(savedFrontAnimeDetails == null){
//            SavedUserAnimeDetails savedUserAnimeDetails = SavedUserAnimeDetails.builder()
//
//        }

    }
}
