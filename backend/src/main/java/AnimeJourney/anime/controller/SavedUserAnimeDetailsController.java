package AnimeJourney.anime.controller;


import AnimeJourney.anime.model.SavedUserAnimeDetails;
import AnimeJourney.anime.service.FetchResponse;
import AnimeJourney.anime.service.SavedUserAnimeDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/savedAnimeUserDetails")
@RequiredArgsConstructor
public class SavedUserAnimeDetailsController {
    private final SavedUserAnimeDetailsService savedUserAnimeDetailsService;


    @GetMapping("getUserAnimeList/{userId}")
    public ResponseEntity<List<SavedUserAnimeDetails>> getAnimeUserDetails(@PathVariable Long userId){
        return ResponseEntity.ok( savedUserAnimeDetailsService.getUserAnimeList(userId));
    }

    @CrossOrigin("http://localhost:5173/")
    @GetMapping("userHaveAnime/{animeId}")
    public ResponseEntity<SavedUserAnimeDetails> userHaveAnime( @PathVariable Long animeId){
        return ResponseEntity.ok( savedUserAnimeDetailsService.userHaveAnime( animeId));
    }

    @CrossOrigin("http://localhost:5173/")
    @PatchMapping("editAnimeStatus/{id}/{option}/{value}")
    public FetchResponse modifyAnimeDetails(@PathVariable Long id, @PathVariable String option, @PathVariable int value){
        System.out.println("hello");
        return savedUserAnimeDetailsService.modifyAnimeDetails(id, option, value);
    }

}
