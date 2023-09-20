package AnimeJourney.controller;

import AnimeJourney.model.NewAnimeSeason;
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
    public ResponseEntity<String> addAnimeList(@RequestBody List<NewAnimeSeason> newAnimeSeasons){
        return ResponseEntity.ok(newAnimeSeasonService.addNewAnimeList(newAnimeSeasons));
    }

    @CrossOrigin("http://localhost:5173/")
    @GetMapping("getAnime/{howMany}")
    public ResponseEntity<List<NewAnimeSeason>> getNewAnimeSeasons(@PathVariable int howMany)
}
