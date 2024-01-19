package com.stack.stackflow;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface AnswerRepo extends MongoRepository<Answer,ObjectId> {
}
