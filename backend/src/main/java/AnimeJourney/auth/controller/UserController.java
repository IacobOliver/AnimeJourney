package AnimeJourney.auth.controller;

import AnimeJourney.anime.service.FetchResponse;
import AnimeJourney.auth.model.AuthenticationRequest;
import AnimeJourney.auth.model.AuthenticationResponse;
import AnimeJourney.auth.model.RegisterRequest;
import AnimeJourney.auth.model.User;
import AnimeJourney.auth.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;


    @CrossOrigin("http://localhost:5173")
    @PostMapping("/auth/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest registerRequest){
        return ResponseEntity.ok(userService.register(registerRequest));
    }

    @CrossOrigin("http://localhost:5173")
    @PostMapping("/auth/authenticate")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody AuthenticationRequest authenticationRequest){
        return ResponseEntity.ok(userService.authenticate(authenticationRequest));
    }

    
}
