package AnimeJourney.controller;

import AnimeJourney.model.NewAnimeSeason;
import AnimeJourney.service.FetchResponse;
import AnimeJourney.service.NewAnimeSeasonService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/newAnimeSeasons")
@RequiredArgsConstructor
public class NewAnimeSeasonController {
    private final NewAnimeSeasonService newAnimeSeasonService;

    @CrossOrigin("http://localhost:5173/")
    @PostMapping("/addAnimes")
    public ResponseEntity<FetchResponse> addAnimeList(@RequestBody List<NewAnimeSeason> newAnimeSeasons){
        return ResponseEntity.ok(newAnimeSeasonService.addNewAnimeList(newAnimeSeasons));
    }

    @CrossOrigin("http://localhost:5173/")
    @PostMapping("/getAnime")
    public ResponseEntity<List<NewAnimeSeason>> getNewAnimeSeasons(@RequestBody PaginationResponse parameters){
        System.out.println(parameters.toString() + "-----------------------------------------------------------------------");
        return ResponseEntity.ok(newAnimeSeasonService.getAnimeForPagination(parameters));
    }


}
