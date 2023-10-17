package AnimeJourney.anime.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SavedAnimeFrontDetails {

    @Id
    @GeneratedValue
    private long id;

    private long animeId;
    private String title;
    private String animeScore;
    private String type;
    private String image;
    private int episodesCount;

    @JsonBackReference
    @OneToMany(mappedBy = "savedAnimeFrontDetails", fetch = FetchType.LAZY)
    private List<SavedAnimeUserDetails> savedAnimeUserDetails;
}
