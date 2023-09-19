package AnimeJourney.controller;

import AnimeJourney.model.TopAnime;
import AnimeJourney.service.TopAnimeService;
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
    public String addTopAnime(@RequestBody List<TopAnime> topAnime) {
       return topAnimeService.postAnimeList(topAnime);
    }


}
