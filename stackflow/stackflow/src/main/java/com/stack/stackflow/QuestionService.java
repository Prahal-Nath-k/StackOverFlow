package com.stack.stackflow;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {
    @Autowired
    private QuestionRepo questionRepo;

    public List<Question> allQuestions() {
        return questionRepo.findAll();
    }

    public Question getQuestionById(ObjectId questionId) {
        return questionRepo.findById(questionId).orElse(null);
    }

    public Question postQuestion(Question question) {
        // You might want to add some business logic or validation before saving
        return questionRepo.save(question);
    }

    public void saveQuestion(Question question) {
        // If you want to save without returning the saved question
        questionRepo.save(question);
    }

}