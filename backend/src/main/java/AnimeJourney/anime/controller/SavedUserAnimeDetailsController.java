package AnimeJourney.anime.controller;


import AnimeJourney.anime.model.SavedUserAnimeDetails;
import AnimeJourney.anime.service.FetchResponse;
import AnimeJourney.anime.service.SavedUserAnimeDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/savedAnimeUserDetails")
@RequiredArgsConstructor
public class SavedUserAnimeDetailsController {
    private final SavedUserAnimeDetailsService savedUserAnimeDetailsService;

    @PostMapping("/postAnime")
    public FetchResponse saveAnimeDetails(SavedUserAnimeDetails savedUserAnimeDetails){
        String response = savedUserAnimeDetailsService.saveAnimeDetails(savedUserAnimeDetails);
        return FetchResponse.builder().response(response).build();
    }

}
