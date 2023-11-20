package AnimeJourney.anime.model;

import AnimeJourney.auth.model.User;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
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

    @ManyToOne
    @JoinColumn
    private User user;

    private String image;

    @Column(length = 10000)
    private String message;
    private String publishDate;
    private int likes;


    @Override
    public String toString() {
        return "AnimeReview{" +
                "id=" + id +
                ", jikanAnimeId=" + jikanAnimeId +
                ", user=" + user +
                ", image='" + image + '\'' +
                ", message='" + message + '\'' +
                ", publishDate='" + publishDate + '\'' +
                ", likes=" + likes +
                '}';
    }
}

