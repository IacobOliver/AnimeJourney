package AnimeJourney.anime.repository;

import AnimeJourney.anime.model.SavedUserAnimeDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SavedUserAnimeDetailsRepository extends JpaRepository<SavedUserAnimeDetails, Long> {

    Optional<List<SavedUserAnimeDetails>> findAllByUserId(Long userId);
}
