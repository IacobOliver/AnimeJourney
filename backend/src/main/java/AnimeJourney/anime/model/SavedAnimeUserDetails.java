package AnimeJourney.anime.model;

import AnimeJourney.auth.model.User;
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
public class SavedAnimeUserDetails {
    @Id
    @GeneratedValue
    private long id;

    private String status;
    private int myScore;
    private int watchedEpisodes;

    @JsonManagedReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn
    private SavedAnimeFrontDetails savedAnimeFrontDetails;

    @JsonManagedReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn
    private User user;


}
