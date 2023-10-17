package AnimeJourney.anime.repository;

import AnimeJourney.anime.model.TopAnime;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TopAnimeRepository  extends JpaRepository<TopAnime, Long> {
}
