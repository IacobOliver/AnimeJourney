package AnimeJourney.anime.controller;

import AnimeJourney.anime.model.NewAnimeSeason;
import AnimeJourney.anime.model.PaginationResponse;
import AnimeJourney.anime.model.FetchResponse;
import AnimeJourney.anime.service.NewAnimeSeasonService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/newAnimeSeasons")
@RequiredArgsConstructor
public class NewAnimeSeasonController {
    private final NewAnimeSeasonService newAnimeSeasonService;


    @PostMapping("/addAnimes")
    public ResponseEntity<FetchResponse> addAnimeList(@RequestBody List<NewAnimeSeason> newAnimeSeasons){
        return ResponseEntity.ok(newAnimeSeasonService.addNewAnimeList(newAnimeSeasons));
    }

    @PostMapping("/getAnime")
    public ResponseEntity<List<NewAnimeSeason>> getNewAnimeSeasons(@RequestBody PaginationResponse parameters){
        return ResponseEntity.ok(newAnimeSeasonService.getAnimeForPagination(parameters));
    }


}
