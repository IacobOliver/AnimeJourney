package AnimeJourney.anime.controller;

import AnimeJourney.anime.model.SavedFrontAnimeDetails;
import AnimeJourney.anime.service.FetchResponse;
import AnimeJourney.anime.service.SavedFrontAnimeDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("savedAnimeFrontDetails")
@RequiredArgsConstructor
public class SavedFrontAnimeDetailsController {
    private final SavedFrontAnimeDetailsService savedFrontAnimeDetailsService;

    @PostMapping ("/postAnime")
    public FetchResponse saveAnime(@RequestBody SavedFrontAnimeDetails savedFrontAnimeDetails){
        savedFrontAnimeDetailsService.saveAnime(savedFrontAnimeDetails);
        return FetchResponse.builder().response("ok").build();
    }

}
