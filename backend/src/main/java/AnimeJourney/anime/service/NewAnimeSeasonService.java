package AnimeJourney.anime.service;

import AnimeJourney.anime.controller.PaginationResponse;
import AnimeJourney.anime.repository.NewAnimeSeasonRepository;
import AnimeJourney.anime.model.NewAnimeSeason;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NewAnimeSeasonService {
    private final NewAnimeSeasonRepository newAnimeSeasonRepository;

    public FetchResponse addNewAnimeList(List<NewAnimeSeason> newAnimeSeasons){
        newAnimeSeasonRepository.saveAll(newAnimeSeasons);
        return FetchResponse.builder().response("POPULATE DONE").build();
    }

    public List<NewAnimeSeason> getAnimeForPagination(PaginationResponse paginationResponse){
        Pageable pageable = PageRequest.of(paginationResponse.getPage(), paginationResponse.getNumberOfItems());
        //All
        if(paginationResponse.getFilter().equals("")){
            return newAnimeSeasonRepository.getSomeAnime(pageable);
        }

        if(paginationResponse.getFilter().equals("anime_type")){
            return newAnimeSeasonRepository.getFilteredAnime(pageable, paginationResponse.getFilterValue());
        }

        if(paginationResponse.getFilter().equals("aired_from")){
            Pageable pageable1 = PageRequest.of(paginationResponse.getPage(), paginationResponse.getNumberOfItems(), Sort.by("airedFrom"));
            return newAnimeSeasonRepository.getSomeAnime(pageable1);
        }


        return null;

    }
    
}
