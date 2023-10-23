package AnimeJourney.anime.service;


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

    public String saveAnimeDetails(SavedUserAnimeDetails savedUserAnimeDetails) {
        System.out.println(savedUserAnimeDetails + "--------------------------------");
        return "ok";
    }

    public List<SavedUserAnimeDetails> getAll() {
       return savedUserAnimeDetailsRepository.findAll();
    }

    public List<SavedUserAnimeDetails> getUserAnimeList(Long userId){
        return savedUserAnimeDetailsRepository.findAllByUserId(userId).orElse(null);
    }
}
