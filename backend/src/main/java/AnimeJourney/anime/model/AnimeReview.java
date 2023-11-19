package AnimeJourney.anime.model;

import AnimeJourney.auth.model.User;
import jakarta.persistence.Column;
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

    @Column(length = 10000)
    private String message;
    private String publishDate;
    private int likes;

    @Override
    public String toString() {
        return "AnimeReview{" +
                "id=" + id +
                ", jikanAnimeId=" + jikanAnimeId +
                ", image='" + image + '\'' +
                ", username='" + username + '\'' +
                ", message='" + message + '\'' +
                ", publishDate='" + publishDate + '\'' +
                ", likes=" + likes +
                '}';
    }
}

