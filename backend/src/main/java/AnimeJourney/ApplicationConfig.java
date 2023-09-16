package AnimeJourney;

import AnimeJourney.service.TopAnimeService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

//@Configuration
public class ApplicationConfig {
    @Bean
    CommandLineRunner commandLineRunner(TopAnimeService topAnimeService){
        return args ->{

        };
    }

}

