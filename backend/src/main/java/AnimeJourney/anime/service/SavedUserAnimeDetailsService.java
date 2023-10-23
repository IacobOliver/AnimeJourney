package AnimeJourney.anime.service;


import AnimeJourney.anime.model.AnimeStatus;
import AnimeJourney.anime.model.SavedUserAnimeDetails;
import AnimeJourney.anime.repository.SavedUserAnimeDetailsRepository;
import AnimeJourney.auth.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
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

    public List<SavedUserAnimeDetails> getUserAnimeList(Long userId){
        return savedUserAnimeDetailsRepository.findAllByUserId(userId).orElse(null);
    }

    public SavedUserAnimeDetails userHaveAnime( Long animeId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        User user = (User) authentication.getPrincipal();

        List<SavedUserAnimeDetails> savedUserAnimeDetails = savedUserAnimeDetailsRepository.findAllByUserId(user.getId()).orElse(null);
        for (int i = 0; i < savedUserAnimeDetails.size(); i++) {
            if(savedUserAnimeDetails.get(i).getSavedAnimeFrontDetails().getAnimeId() == animeId){
                return savedUserAnimeDetails.get(i);
            }
        }
        return null;
    }

    public FetchResponse modifyAnimeDetails(long id, String option, int value) {
        System.out.println(option + " _________" + value);
        System.out.println(id);

        if(option.equals("status")){
            savedUserAnimeDetailsRepository.updateAnimeStatus(id, AnimeStatus.values()[value]);
        }else if(option.equals("watchedEpisodes")){
            savedUserAnimeDetailsRepository.updateAnimeWatchedEpisodes(id, value);
        }else if(option.equals("myScore")){
            savedUserAnimeDetailsRepository.updateAnimeScore(id , value);
        }

        return FetchResponse.builder().response("ok").build();
    }
}
