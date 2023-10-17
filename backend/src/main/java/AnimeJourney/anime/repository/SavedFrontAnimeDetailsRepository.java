package AnimeJourney.anime.repository;

import AnimeJourney.anime.model.SavedFrontAnimeDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SavedAnimeFrontDetailsRepository extends JpaRepository<SavedFrontAnimeDetails, Long> {
}
