package AnimeJourney.auth.service;

import AnimeJourney.auth.model.*;
import AnimeJourney.auth.repository.UserRepository;
import AnimeJourney.config.JWTService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final JWTService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest registerRequest) {
        System.out.println(registerRequest.getMemberName());
        boolean emailExists =  userRepository.existsByEmail(registerRequest.getEmail());
        boolean usernameExists = userRepository.existsByMemberName(registerRequest.getMemberName());

        if(usernameExists && emailExists){
            return AuthenticationResponse.builder().response("3").build();
        }else if(usernameExists){
            return AuthenticationResponse.builder().response("2").build();
        }else if (emailExists){
            return AuthenticationResponse.builder().response("1").build();
        }

        var user = User.builder()
                .memberName(registerRequest.getMemberName())
                .email(registerRequest.getEmail())
                .password( passwordEncoder.encode(registerRequest.getPassword()))
                .role(Role.USER)
                .build();

        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().response(jwtToken).build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest) {

        authenticationManager.authenticate( new UsernamePasswordAuthenticationToken(
                authenticationRequest.getEmail(),
                authenticationRequest.getPassword()
        ));

        var user = userRepository.findByEmail(authenticationRequest.getEmail()).orElseThrow();

        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().response(jwtToken).build();
    }

    public User getUserWithToken(String authHeader) {
        String token = authHeader.substring(7);

        User user = userRepository.findByEmail(jwtService.extractUsername(token)).orElse(null);

        return user;
    }
}
