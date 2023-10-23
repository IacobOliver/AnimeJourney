package AnimeJourney.anime.service;

import AnimeJourney.anime.model.SavedFrontAnimeDetails;
import AnimeJourney.anime.model.SavedUserAnimeDetails;
import AnimeJourney.anime.repository.SavedFrontAnimeDetailsRepository;
import AnimeJourney.anime.repository.SavedUserAnimeDetailsRepository;
import jakarta.persistence.Id;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SavedFrontAnimeDetailsService {
    private final SavedFrontAnimeDetailsRepository savedFrontAnimeDetailsRepository;
    private final SavedUserAnimeDetailsRepository savedUserAnimeDetailsRepository;


    public String saveAnime(SavedFrontAnimeDetails anime) {
        SavedFrontAnimeDetails savedFrontAnimeDetails = savedFrontAnimeDetailsRepository.findByAnimeId(anime.getAnimeId());

        System.out.println(anime);

       SavedUserAnimeDetails savedUserAnimeDetails = anime.getSavedAnimeUserDetails().get(0);

         if(savedFrontAnimeDetails == null){
             savedUserAnimeDetails.setSavedAnimeFrontDetails(anime);
             savedFrontAnimeDetailsRepository.save(anime);
             return "saved";
         }

        savedUserAnimeDetails.setSavedAnimeFrontDetails(savedFrontAnimeDetails);
       savedUserAnimeDetailsRepository.save(savedUserAnimeDetails);

       // SAU

//        savedUserAnimeDetails.setSavedAnimeFrontDetails(savedFrontAnimeDetails);
//        savedFrontAnimeDetails.addAnime(savedUserAnimeDetails);
//        savedFrontAnimeDetailsRepository.save(savedFrontAnimeDetails);


        return "already exists";

    }
}
