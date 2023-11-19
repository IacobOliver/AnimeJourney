package AnimeJourney.anime.service;

import AnimeJourney.anime.model.AnimeReview;
import AnimeJourney.anime.repository.AnimeReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnimeReviewService {
    private final AnimeReviewRepository animeReviewRepository;

    @Autowired
    public AnimeReviewService(AnimeReviewRepository animeReviewRepository) {
        this.animeReviewRepository = animeReviewRepository;
    }

    public List<AnimeReview> getAnimeReviews(long animeId) {
        return animeReviewRepository.findAllByJikanAnimeId(animeId).orElse(null);
    }

    public AnimeReview postAnimeReview(AnimeReview animeReview) {
        return animeReviewRepository.save(animeReview);
    }
}
