package AnimeJourney.anime.service;

import AnimeJourney.anime.model.AnimeReview;
import AnimeJourney.anime.model.FetchResponse;
import AnimeJourney.anime.repository.AnimeReviewRepository;
import AnimeJourney.auth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AnimeReviewService {
    private final AnimeReviewRepository animeReviewRepository;
    private final UserRepository userRepository;




    public List<AnimeReview> getAnimeReviews(long animeId) {
        return animeReviewRepository.findAllByJikanAnimeId(animeId).orElse(null);
    }

    public AnimeReview postAnimeReview(AnimeReview animeReview) {
        animeReview.setUser(userRepository.findById(animeReview.getUser().getId()).orElse(null));
        return animeReviewRepository.save(animeReview);
    }

    public FetchResponse deleteReview(long reviewId) {
        animeReviewRepository.deleteById(reviewId);
        return FetchResponse.builder().response("deleted").build();
    }

    public AnimeReview updateReview(long jikanAnimeId, String contentReview, String currentDate) {
        AnimeReview animeReview = animeReviewRepository.findByJikanAnimeId(jikanAnimeId).orElse(null);
        animeReview.setMessage(contentReview);
        animeReview.setPublishDate(currentDate);
        return animeReviewRepository.save(animeReview);
    }
}
