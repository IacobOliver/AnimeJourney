package AnimeJourney.anime.service;

import AnimeJourney.anime.model.AnimeReview;
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
}
