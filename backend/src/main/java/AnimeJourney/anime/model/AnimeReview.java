package AnimeJourney.anime.model;

import AnimeJourney.auth.model.User;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AnimeReview {
    @Id
    @GeneratedValue
    private long id;
    private long jikanAnimeId;

    private String image;
    private String username;
    private String message;
    private String publishDate;
    private int likes;
}

