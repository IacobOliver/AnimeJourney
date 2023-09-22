package AnimeJourney.service;

import AnimeJourney.controller.PaginationResponse;
import AnimeJourney.model.NewAnimeSeason;
import AnimeJourney.repository.NewAnimeSeasonRepository;
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

    public String addNewAnimeList(List<NewAnimeSeason> newAnimeSeasons){
        newAnimeSeasonRepository.saveAll(newAnimeSeasons);
        return "done";
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

//    public List<NewAnimeSeason> getFilteredAnime(PaginationResponse parameters) {
//        Pageable pageable = PageRequest.of(parameters.getPage(), parameters.getNumberOfItems());
//        return newAnimeSeasonRepository.getFilteredAnime(pageable, parameters.getFilter(), parameters.getFilterValue());
//    }
}
