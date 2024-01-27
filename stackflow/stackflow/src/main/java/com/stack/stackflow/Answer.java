package com.stack.stackflow;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
@Document(collection = "Answers")
@Data
public class Answer {
    private ObjectId _id;
    private ObjectId questionId;
    private String body;
    private String userId;
    private int upvotes;
    private int downvotes;
    private boolean isApproved;
    private Date createdAt;
    private Date updatedAt;


    public Answer() {
    }

    public Answer(ObjectId _id, ObjectId questionId, String body, String userId, int upvotes, int downvotes,
                  boolean isApproved, Date createdAt, Date updatedAt) {
        this._id = _id;
        this.questionId = questionId;
        this.body = body;
        this.userId = userId;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
        this.isApproved = isApproved;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public ObjectId get_id() {
        return _id;
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public ObjectId getQuestionId() {
        return questionId;
    }

    public void setQuestionId(ObjectId questionId) {
        this.questionId = questionId;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public int getUpvotes() {
        return upvotes;
    }

    public void setUpvotes(int upvotes) {
        this.upvotes = upvotes;
    }

    public int getDownvotes() {
        return downvotes;
    }

    public void setDownvotes(int downvotes) {
        this.downvotes = downvotes;
    }

    public boolean isApproved() {
        return isApproved;
    }

    public void setApproved(boolean approved) {
        isApproved = approved;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}
