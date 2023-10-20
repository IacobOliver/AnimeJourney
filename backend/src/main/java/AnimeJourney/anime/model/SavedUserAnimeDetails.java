package AnimeJourney.anime.model;

import AnimeJourney.auth.model.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
public class SavedUserAnimeDetails {
    @Id
    @GeneratedValue
    private long id;

    private String status;
    private int myScore;
    private int watchedEpisodes;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn
    @JsonBackReference(value = "savedAnimeFrontDetails")
    private SavedFrontAnimeDetails savedAnimeFrontDetails;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    @JsonBackReference(value = "user")
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
