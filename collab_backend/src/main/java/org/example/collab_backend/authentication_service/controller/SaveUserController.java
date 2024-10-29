// SaveUserController.java
package org.example.collab_backend.authentication_service.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.example.collab_backend.authentication_service.user.UserEntity;
import org.example.collab_backend.authentication_service.user.UserRepository;
import org.example.collab_backend.authentication_service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;
import java.util.Map;
import java.util.Optional;

import jakarta.validation.Valid;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/public")
public class SaveUserController  {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody UserEntity userEntity) {
        Optional<UserEntity> existingUser = userRepository.findByEmail(userEntity.getEmail());
        if (existingUser.isPresent()) {
            return ResponseEntity.status(400).body("Email already in use");
        }

        userEntity.setPassword(bCryptPasswordEncoder.encode(userEntity.getPassword()));
        userRepository.save(userEntity);

        String jwtToken = generateJwtToken(userEntity);
        return ResponseEntity.ok().body(Map.of("message", "User registered successfully", "jwtToken", jwtToken));
    }

    @PutMapping("/user/updateProfileImage")
    public ResponseEntity<?> updateProfileImage(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        String imageUrl = payload.get("imageUrl");

        // Ajoutez des logs pour voir les valeurs reçues
        System.out.println("Email: " + email);
        System.out.println("Image URL: " + imageUrl);

        try {
            userService.updateProfileImage(email, imageUrl);
            // Modifiez cette ligne pour retourner une réponse JSON
            return ResponseEntity.ok().body(Map.of("message", "Profile image updated successfully"));
        } catch (Exception e) {
            System.err.println("Error updating profile image: " + e.getMessage());
            return ResponseEntity.status(500).body(Map.of("error", "Failed to update profile image: " + e.getMessage()));
        }
    }



    private String generateJwtToken(UserEntity userEntity) {
        Key secretKey = Keys.hmacShaKeyFor("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c".getBytes(StandardCharsets.UTF_8));
        return Jwts.builder()
                .setSubject(userEntity.getEmail())
                .claim("firstName", userEntity.getFirstName())
                .claim("lastName", userEntity.getLastName())
                .setExpiration(new Date(System.currentTimeMillis() + 86400000))
                .signWith(secretKey, SignatureAlgorithm.HS256)
                .compact();
    }
}
