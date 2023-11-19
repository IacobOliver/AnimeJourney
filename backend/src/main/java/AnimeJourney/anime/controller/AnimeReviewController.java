package AnimeJourney.anime.controller;

import AnimeJourney.anime.service.AnimeReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("reviews")
public class AnimeReviewController {
    private final AnimeReviewService animeReviewService;

    @Autowired
    public AnimeReviewController(AnimeReviewService animeReviewService) {
        this.animeReviewService = animeReviewService;
    }
}
