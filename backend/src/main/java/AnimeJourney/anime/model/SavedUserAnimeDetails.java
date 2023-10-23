package AnimeJourney.anime.model;

import AnimeJourney.auth.model.User;
import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class SavedUserAnimeDetails {
    @Id
    @GeneratedValue
    private long id;

    private String status;
    private int myScore;
    private int watchedEpisodes;


    @ManyToOne
    @JoinColumn
    private SavedFrontAnimeDetails savedAnimeFrontDetails;


    @ManyToOne
    @JoinColumn
    @JsonBackReference
    private User user;


    @Override
    public String toString() {
        return "SavedUserAnimeDetails{" +
                "id=" + id +
                ", status='" + status + '\'' +
                ", myScore=" + myScore +
                ", watchedEpisodes=" + watchedEpisodes +
                " , user = " + user +
                '}';
    }
}
