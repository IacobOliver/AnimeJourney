package AnimeJourney.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TopAnime {
    @Id
    @GeneratedValue
    private long id;
    private long animeId;

    private String name;
    private double rating;
    private long numberOfReviews;

    @Column(length = 10000)
    private String animeDescription;

    @ElementCollection
    private List<String> images;
}
