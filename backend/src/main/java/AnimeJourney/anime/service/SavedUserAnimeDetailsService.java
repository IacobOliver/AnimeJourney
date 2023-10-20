package AnimeJourney.anime.service;


import AnimeJourney.anime.model.SavedUserAnimeDetails;
import AnimeJourney.anime.repository.SavedUserAnimeDetailsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SavedUserAnimeDetailsService {
    private final SavedUserAnimeDetailsRepository savedUserAnimeDetailsRepository;

    public String saveAnimeDetails(SavedUserAnimeDetails savedUserAnimeDetails) {
        System.out.println(savedUserAnimeDetails + "--------------------------------");
        return "ok";
    }
}
