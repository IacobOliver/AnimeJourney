package AnimeJourney.anime.controller;


import AnimeJourney.anime.model.SavedUserAnimeDetails;
import AnimeJourney.anime.model.FetchResponse;
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

    @GetMapping
    public ResponseEntity<List<SavedUserAnimeDetails>> getUserAnimeList(@RequestParam (name = "userId") Long userId,
                                                                        @RequestParam (name = "pageNr", required = false) Integer pageNr,
                                                                        @RequestParam (name = "quantity", required = false) Integer quantity,
                                                                        @RequestParam (name = "statusFilter", required = false) Integer statusFilter){
        return ResponseEntity.ok( savedUserAnimeDetailsService.getUserAnimeList(userId, pageNr, quantity, statusFilter));
    }




    @GetMapping("userHaveAnime/{animeId}")
    public ResponseEntity<SavedUserAnimeDetails> userHaveAnime( @PathVariable Long animeId){
        return ResponseEntity.ok( savedUserAnimeDetailsService.userHaveAnime( animeId));
    }



    @PatchMapping("editAnimeStatus/{id}/{option}/{value}")
    public FetchResponse modifyAnimeDetails(@PathVariable Long id, @PathVariable String option, @PathVariable int value){
        return savedUserAnimeDetailsService.modifyAnimeDetails(id, option, value);
    }

}
