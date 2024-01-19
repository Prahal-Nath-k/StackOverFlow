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
        return questionRepo.save(question);
    }

    public void saveQuestion(Question question) {
        questionRepo.save(question);
    }

}