package AnimeJourney.anime.repository;

import AnimeJourney.anime.model.SavedFrontAnimeDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SavedFrontAnimeDetailsRepository extends JpaRepository<SavedFrontAnimeDetails, Long> {
    SavedFrontAnimeDetails findByAnimeId(Long animeId);
}
