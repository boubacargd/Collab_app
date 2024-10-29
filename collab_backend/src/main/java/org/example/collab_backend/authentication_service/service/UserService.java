package org.example.collab_backend.authentication_service.service;

import org.example.collab_backend.authentication_service.user.UserDTO;
import org.example.collab_backend.authentication_service.user.UserEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface UserService {
    UserDTO getUserByEmail(String email);
    Optional<UserDTO> findById(Long id);

    void updateProfileImage(String email, String imagePath);

}
