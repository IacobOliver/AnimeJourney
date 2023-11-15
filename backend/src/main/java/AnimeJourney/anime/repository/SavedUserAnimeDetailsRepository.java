package AnimeJourney.anime.repository;

import AnimeJourney.anime.model.SavedUserAnimeDetails;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface SavedUserAnimeDetailsRepository extends JpaRepository<SavedUserAnimeDetails, Long> {
    Optional<List<SavedUserAnimeDetails>> findAllByUserId(Long userId);
    Optional<List<SavedUserAnimeDetails>> findAllByUserId(Long userId, Pageable pageable);
    Optional<List<SavedUserAnimeDetails>> findAllByUserIdAndAnimeId(Long userId, Long animeId);

    @Query("UPDATE SavedUserAnimeDetails s SET s.status = :value WHERE s.id = :id")
    @Modifying
    @Transactional
    void updateAnimeStatus(@Param("id") Long id, @Param("value") int value);

    @Query("UPDATE SavedUserAnimeDetails s SET s.watchedEpisodes = :value WHERE s.id = :id")
    @Modifying
    @Transactional
    void updateAnimeWatchedEpisodes(Long id,  int value);

    @Query("UPDATE SavedUserAnimeDetails s SET s.myScore = :value WHERE s.id = :id")
    @Modifying
    @Transactional
    void updateAnimeScore(Long id, int value);
}
