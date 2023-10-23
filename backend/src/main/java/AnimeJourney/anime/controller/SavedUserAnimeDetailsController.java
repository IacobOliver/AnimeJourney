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

//    @PostMapping("/postAnime")
//    public FetchResponse saveAnimeDetails(SavedUserAnimeDetails savedUserAnimeDetails){
//        String response = savedUserAnimeDetailsService.saveAnimeDetails(savedUserAnimeDetails);
//        return FetchResponse.builder().response(response).build();
//    }

    @GetMapping("getAll")
    public ResponseEntity<List<SavedUserAnimeDetails>> getAnimeUserDetails(){
        return ResponseEntity.ok( savedUserAnimeDetailsService.getAll());
    }

    @GetMapping("getUserAnimeList/{userId}")
    public ResponseEntity<List<SavedUserAnimeDetails>> getAnimeUserDetails(@PathVariable Long userId){
        return ResponseEntity.ok( savedUserAnimeDetailsService.getUserAnimeList(userId));
    }

}
