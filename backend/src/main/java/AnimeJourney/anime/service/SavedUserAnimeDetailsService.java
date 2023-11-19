package AnimeJourney.anime.service;


import AnimeJourney.anime.model.FetchResponse;
import AnimeJourney.anime.model.SavedUserAnimeDetails;
import AnimeJourney.anime.repository.SavedUserAnimeDetailsRepository;
import AnimeJourney.auth.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SavedUserAnimeDetailsService {
    private final SavedUserAnimeDetailsRepository savedUserAnimeDetailsRepository;


    public List<SavedUserAnimeDetails> getAll() {
       return savedUserAnimeDetailsRepository.findAll();
    }

    public List<SavedUserAnimeDetails> getUserAnimeList(Long userId, Integer pageNr, Integer quantity, Integer statusFilter){
        System.out.println("pageNr "+ pageNr);
        System.out.println("quantity " + quantity);
        System.out.println("status " + statusFilter);



        if( pageNr == null || quantity == null || statusFilter == null) {
            return savedUserAnimeDetailsRepository.findAllByUserId(userId).orElse(null);
        }

        Pageable pageable = PageRequest.of(pageNr, quantity);
        if(statusFilter == 6){
            return savedUserAnimeDetailsRepository.findAllByUserIdOrderByStatus(userId, pageable).orElse(null);
        }

        return savedUserAnimeDetailsRepository.findAllByUserIdAndStatus(userId, statusFilter, pageable).orElse(null);
    }

    public SavedUserAnimeDetails userHaveAnime( Long animeId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        User user = (User) authentication.getPrincipal();

        SavedUserAnimeDetails savedUserAnimeDetails = savedUserAnimeDetailsRepository.findByUserIdAndAnimeId(user.getId(), animeId).orElse(null);

        if(savedUserAnimeDetails != null){
            return savedUserAnimeDetails;
        }

        return null;
    }

    public FetchResponse modifyAnimeDetails(long id, String option, int value) {
        System.out.println(option + " _________" + value);
        System.out.println(id);

        if(option.equals("status")){
            savedUserAnimeDetailsRepository.updateAnimeStatus(id, value);
        }else if(option.equals("watchedEpisodes")){
            savedUserAnimeDetailsRepository.updateAnimeWatchedEpisodes(id, value);
        }else if(option.equals("myScore")){
            savedUserAnimeDetailsRepository.updateAnimeScore(id , value);
        }

        return FetchResponse.builder().response("ok").build();
    }
}
