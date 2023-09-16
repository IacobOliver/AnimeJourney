package AnimeJourney.repository;

import AnimeJourney.model.TopAnime;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TopAnimeRepository  extends JpaRepository<TopAnime, Long> {
}
