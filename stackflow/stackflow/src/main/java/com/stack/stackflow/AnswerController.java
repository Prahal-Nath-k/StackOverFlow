package com.stack.stackflow;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class AnswerController {

    @Autowired
    private AnswerService answerService;

    @PostMapping("/create")
    public ResponseEntity<Answer> createAnswer(@RequestBody Answer answer) {
        Answer createdAnswer = answerService.createAnswer(answer);
        return new ResponseEntity<>(createdAnswer, HttpStatus.CREATED);
    }

    @GetMapping("/get-answer/{answerId}")
    public ResponseEntity<Answer> getAnswer(@PathVariable ObjectId answerId) {
        Answer answer = answerService.getAnswerById(answerId);
        if (answer != null) {
            return new ResponseEntity<>(answer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/{answerId}/upvote")
    public ResponseEntity<Answer> upvoteAnswer(@PathVariable ObjectId answerId) {
        Answer upvotedAnswer = answerService.upvoteAnswer(answerId);
        if (upvotedAnswer != null) {
            return new ResponseEntity<>(upvotedAnswer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/{answerId}/downvote")
    public ResponseEntity<Answer> downvoteAnswer(@PathVariable ObjectId answerId) {
        Answer downvotedAnswer = answerService.downvoteAnswer(answerId);
        if (downvotedAnswer != null) {
            return new ResponseEntity<>(downvotedAnswer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("delete/{answerId}")
    public ResponseEntity<Void> deleteAnswer(@PathVariable ObjectId answerId) {
        boolean deleted = answerService.deleteAnswer(answerId);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}