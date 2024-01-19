package com.stack.stackflow;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerService {

    @Autowired
    private AnswerRepo answerRepository;

    public Answer createAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    public Answer getAnswerById(ObjectId answerId) {
        return  answerRepository.findById(answerId).orElse(null);
    }

    public Answer upvoteAnswer(ObjectId answerId) {
        Answer answer = (Answer) answerRepository.findById(answerId).orElse(null);
        if (answer != null) {
            answer.setUpvotes(answer.getUpvotes() + 1);
            return answerRepository.save(answer);
        }
        return null;
    }

    public Answer downvoteAnswer(ObjectId answerId) {
        Answer answer = (Answer) answerRepository.findById(answerId).orElse(null);
        if (answer != null) {
            answer.setDownvotes(answer.getDownvotes() + 1);
            return answerRepository.save(answer);
        }
        return null;
    }

    public boolean deleteAnswer(ObjectId answerId) {
        if (answerRepository.existsById(answerId)) {
            answerRepository.deleteById(answerId);
            return true;
        }
        return false;
    }


    public List<Answer> getAllAnswers() {
        return answerRepository.findAll();
    }
}