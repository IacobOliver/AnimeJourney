package AnimeJourney.service;

import AnimeJourney.controller.PaginationResponse;
import AnimeJourney.model.NewAnimeSeason;
import AnimeJourney.repository.NewAnimeSeasonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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

    public List<NewAnimeSeason> getAnimeForPagination(PaginationResponse paginationResponse){
        Pageable pageable = PageRequest.of(paginationResponse.getPage(), paginationResponse.getNumberOfItems());
        return newAnimeSeasonRepository.getSomeAnime(pageable);
    }

}
