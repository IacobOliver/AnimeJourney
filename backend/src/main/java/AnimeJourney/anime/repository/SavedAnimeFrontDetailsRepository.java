package AnimeJourney.anime.repository;

import AnimeJourney.anime.model.SavedAnimeFrontDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SavedAnimeFrontDetailsRepository extends JpaRepository<SavedAnimeFrontDetails, Long> {
}
