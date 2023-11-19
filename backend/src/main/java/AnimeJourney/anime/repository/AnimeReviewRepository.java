package AnimeJourney.anime.repository;

import AnimeJourney.anime.model.AnimeReview;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnimeReviewRepository extends JpaRepository<AnimeReview, Long> {
}
