package com.stack.stackflow;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AnswerRepo extends MongoRepository<Answer,Long> {
    List<Answer> findByQuestionId(Long questionId);
}
