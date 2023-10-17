package AnimeJourney.anime.controller;

import AnimeJourney.anime.model.TopAnime;
import AnimeJourney.anime.service.FetchResponse;
import AnimeJourney.anime.service.TopAnimeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/topAnime")
@RequiredArgsConstructor
public class TopAnimeController {
    private final TopAnimeService topAnimeService;


@CrossOrigin("http://localhost:5173/")
    @GetMapping("/getRandomAnime/{howMany}")
    public ResponseEntity<List<TopAnime>> getRandomAnime(@PathVariable int howMany){
        return ResponseEntity.ok(topAnimeService.getRandomAnime(howMany));
    }

    @CrossOrigin("http://localhost:5173/")
    @PostMapping("/addAnime")
    public ResponseEntity<FetchResponse> addTopAnime(@RequestBody List<TopAnime> topAnime) {
       return ResponseEntity.ok(topAnimeService.postAnimeList(topAnime));
    }


}
