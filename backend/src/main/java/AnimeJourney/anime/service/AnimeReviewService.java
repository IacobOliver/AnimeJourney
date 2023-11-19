package AnimeJourney.anime.service;

import AnimeJourney.anime.repository.AnimeReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnimeReviewService {
    private final AnimeReviewRepository animeReviewRepository;

    @Autowired
    public AnimeReviewService(AnimeReviewRepository animeReviewRepository) {
        this.animeReviewRepository = animeReviewRepository;
    }
}
