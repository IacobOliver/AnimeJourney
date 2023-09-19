package AnimeJourney.service;

import AnimeJourney.model.NewAnimeSeason;
import AnimeJourney.repository.NewAnimeSeasonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NewAnimeSeasonService {
    private final NewAnimeSeasonRepository newAnimeSeasonRepository;

    public String addNewAnimeList(List<NewAnimeSeason> newAnimeSeasons){
        newAnimeSeasonRepository.saveAll(newAnimeSeasons);
        return "done";
    }

}
