package AnimeJourney.anime.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SavedFrontAnimeDetails {

    @Id
    @GeneratedValue
    private long id;

    private long animeId;
    private String title;
    private double animeScore;
    private String type;
    private String image;
    private int episodesCount;


    @OneToMany(mappedBy = "savedAnimeFrontDetails",cascade = CascadeType.ALL ,fetch = FetchType.EAGER)
    private List<SavedUserAnimeDetails> savedAnimeUserDetails;

    public void addAnime(SavedUserAnimeDetails animeDetails){
        savedAnimeUserDetails.add(animeDetails);
    }
}
