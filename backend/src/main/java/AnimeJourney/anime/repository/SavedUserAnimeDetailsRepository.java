package AnimeJourney.anime.repository;

import AnimeJourney.anime.model.SavedUserAnimeDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SavedUserAnimeDetailsRepository extends JpaRepository<SavedUserAnimeDetails, Long> {
}
