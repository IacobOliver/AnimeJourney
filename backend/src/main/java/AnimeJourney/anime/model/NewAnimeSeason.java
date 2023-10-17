package AnimeJourney.model;

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
public class NewAnimeSeason {
    @Id
    @GeneratedValue
    private long id;
    private int animeId;
    private String name;
    private String image;
    private String airedFrom;
    private String animeType;
}
