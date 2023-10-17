package AnimeJourney.model;

import com.fasterxml.jackson.databind.annotation.JsonAppend;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Proxy;

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

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> images;
}
