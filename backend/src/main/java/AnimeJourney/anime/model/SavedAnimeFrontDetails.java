package AnimeJourney.anime.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SavedAnime {

    @Id
    @GeneratedValue
    private long id;

    private String status;
    private int myScore;
    private int episodesCount;
    private int watchedEpisodes;

    private long animeId;
    private String title;
    private String animeScore;
    private String type;
    private String image;
}
