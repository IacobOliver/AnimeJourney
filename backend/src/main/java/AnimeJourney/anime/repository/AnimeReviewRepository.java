package AnimeJourney.anime.repository;

import AnimeJourney.anime.model.AnimeReview;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface AnimeReviewRepository extends JpaRepository<AnimeReview, Long> {

    Optional<List<AnimeReview>> findAllByJikanAnimeId(long animeId);
    Optional<AnimeReview> findByJikanAnimeId(long animeId);

}
