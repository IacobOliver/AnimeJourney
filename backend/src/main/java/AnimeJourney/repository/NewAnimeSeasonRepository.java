package AnimeJourney.repository;

import AnimeJourney.model.NewAnimeSeason;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NewAnimeSeasonRepository extends JpaRepository<NewAnimeSeason, Long> {

    @Query("SELECT a FROM NewAnimeSeason a")
    List<NewAnimeSeason> getSomeAnime(Pageable pageable);

}
