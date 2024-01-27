package com.stack.stackflow;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "Questions")
@Data
public class Question {

    @Id
    private ObjectId _id;
    private String title;
    private String body;
    private String author;
    private List<ObjectId> answers;
    private ObjectId approvedAnswerId;
    private Date createdAt;
    private Date updatedAt;


    public Question() {
    }

    public Question(ObjectId _id, String title, String body, String author, List<ObjectId> answers,
                    ObjectId approvedAnswerId, Date createdAt, Date updatedAt) {
        this._id = _id;
        this.title = title;
        this.body = body;
        this.author = author;
        this.answers = answers;
        this.approvedAnswerId = approvedAnswerId;
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

    public String getAuthor() {
        return author;
    }

    public void setauthor(String author) {
        this.author = author;
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