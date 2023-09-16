package AnimeJourney;

import AnimeJourney.populate.PopulateTopAnime;
import AnimeJourney.service.TopAnimeService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

//@Configuration
public class ApplicationConfig {
    @Bean
    CommandLineRunner commandLineRunner(TopAnimeService topAnimeService){
        return args ->{
            PopulateTopAnime populateTopAnime = new PopulateTopAnime(topAnimeService);
            populateTopAnime.test();
        };
    }

}

