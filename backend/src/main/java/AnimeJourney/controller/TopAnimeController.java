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


    @GetMapping("/getRandomAnime/{howMany}")
    public ResponseEntity<List<TopAnime>> getRandomAnime(@PathVariable int howMany){
        return ResponseEntity.ok(topAnimeService.getRandomAnime());
    }

    @PostMapping("/addAnime")
    public void addTopAnime(@RequestBody List<TopAnime> topAnime) {
        System.out.println(topAnime.size());

    }


}
