package org.example.collab_backend.authentication_service.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PublicTest {
    @GetMapping("/api/public/test")
    public ResponseEntity<String> publicTest() {
        return ResponseEntity.ok("This is a public endpoint.");
    }
}
