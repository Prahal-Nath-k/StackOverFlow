package com.stack.stackflow;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AnswerRepo extends MongoRepository<Answer,Long> {
    List<Answer> findByQuestionId(Long questionId);

    ScopedValue<Object> findById(ObjectId answerId);

    boolean existsById(ObjectId answerId);

    void deleteById(ObjectId answerId);
}
