package AnimeJourney.controller;

import AnimeJourney.model.TopAnime;
import AnimeJourney.service.TopAnimeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("/topAnime")
@RequiredArgsConstructor
public class TopAnimeController {
    private final TopAnimeService topAnimeService;


    @GetMapping
    public ResponseEntity<List<TopAnime>> getRandomAnime(@PathVariable int howMany){
        return ResponseEntity.ok(topAnimeService.getRandomAnime());
    }


}
