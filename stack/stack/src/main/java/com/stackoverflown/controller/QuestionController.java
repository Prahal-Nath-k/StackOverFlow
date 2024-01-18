package com.stackoverflown.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class QuestionController {

    @GetMapping
    public ResponseEntity<String> apiRoot(){
        return new ResponseEntity<String>( "rest",HttpStatus.OK);
    }
}