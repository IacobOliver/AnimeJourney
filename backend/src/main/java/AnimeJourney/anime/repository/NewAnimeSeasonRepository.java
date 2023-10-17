package AnimeJourney.anime.repository;

import AnimeJourney.anime.model.NewAnimeSeason;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface NewAnimeSeasonRepository extends JpaRepository<NewAnimeSeason, Long> {

    @Query("SELECT a FROM NewAnimeSeason a")
    List<NewAnimeSeason> getSomeAnime(Pageable pageable);

//    @Query("SELECT a FROM NewAnimeSeason a " +
//            "ORDER BY :lol ASC")
//    List<NewAnimeSeason> getMostRecent(String lol );


    @Query("SELECT a FROM NewAnimeSeason a " +
            "WHERE a.animeType = :value")
    List<NewAnimeSeason> getFilteredAnime(Pageable pageable, @Param("value") String filter);
}
