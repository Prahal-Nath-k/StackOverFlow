package com.stackoverflown.model;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.lang.annotation.Documented;
import java.util.Date;
import java.util.List;

@Document(collection = "questions")
@Data
public class Question {

    @Id
    private ObjectId _id;
    private String title;
    private String body;
    private String userId;
    private List<ObjectId> answers;
    private ObjectId approvedAnswerId;
    private int upvotes;
    private int downvotes;
    private Date createdAt;
    private Date updatedAt;

    // Constructors, getters, and setters

    public Question() {
        // Default constructor
    }

    public Question(ObjectId _id, String title, String body, String userId, List<ObjectId> answers,
                    ObjectId approvedAnswerId, int upvotes, int downvotes, Date createdAt, Date updatedAt) {
        this._id = _id;
        this.title = title;
        this.body = body;
        this.userId = userId;
        this.answers = answers;
        this.approvedAnswerId = approvedAnswerId;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public ObjectId get_id() {
        return _id;
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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

    public List<ObjectId> getAnswers() {
        return answers;
    }

    public void setAnswers(List<ObjectId> answers) {
        this.answers = answers;
    }

    public ObjectId getApprovedAnswerId() {
        return approvedAnswerId;
    }

    public void setApprovedAnswerId(ObjectId approvedAnswerId) {
        this.approvedAnswerId = approvedAnswerId;
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