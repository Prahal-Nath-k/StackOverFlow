import React, { useState, useEffect } from 'react';
import Question from './Question';
import axios from 'axios';

const QuestionList = () => {
  const [questions, setQuestions] = useState([{
    "_id": {
      "$oid": "65a3e2196008f6f058d73036"
    },
    "title": "How to model relationships in MongoDB?",
    "body": "I'm designing a MongoDB schema and need guidance on modeling relationships between collections. Any best practices?",
    "author": "user456",
    "answers": [
      "answer1",
      "answer2"
    ],
    "approvedAnswerId": "65a7fbc06c628a3e1477eebd"
  },
  {
    "_id": {
      "$oid": "65a3e2286008f6f058d73038"
    },
    "title": "How to install MongoDB on Ubuntu?",
    "body": "I'm new to MongoDB and want to install it on my Ubuntu machine. Can someone provide step-by-step instructions?",
    "author": "user123",
    "answers": [
      "answer3",
      "answer4"
    ],
    "approvedAnswerId": "65a7fbc06c628a3e1477eec0"
  }]);

  const [answers, setAnswers] = useState([{
    "_id": {
      "$oid": "65a7fbc06c628a3e1477eebd"
    },
    "question_id": "65a3e2196008f6f058d73036",
    "body": "You can use the official MongoDB documentation for installing MongoDB on Ubuntu. Here are the steps: [link]",
    "author": "user123",
    "upvotes": 10,
    "downvotes": 2,
    "comments": [
      {
        "body": "Thanks for the quick response! It worked for me.",
        "author": "user456"
      },
      {
        "body": "I had some issues with step 3. Can you provide more details?",
        "author": "user789"
      }
    ]
  },
  {
    "_id": {
      "$oid": "65a7fbc06c628a3e1477eebe"
    },
    "question_id": "65a3e2196008f6f058d73036",
    "body": "I prefer using a package manager. You can also install MongoDB on Ubuntu using apt. Here's how...",
    "author": "user789",
    "upvotes": 5,
    "downvotes": 0,
    "comments": [
      {
        "body": "This method is much easier. Thanks for sharing!",
        "author": "user123"
      }
    ]
  },
  {
    "_id": {
      "$oid": "65a7fbc06c628a3e1477eebf"
    },
    "question_id": "65a3e2286008f6f058d73038",
    "body": "MongoDB provides a powerful aggregation framework. Here's an example of how you can use it...",
    "author": "user456",
    "upvotes": 8,
    "downvotes": 1,
    "comments": [
      {
        "body": "Great explanation! Exactly what I needed.",
        "author": "user789"
      }
    ]
  },
  {
    "_id": {
      "$oid": "65a7fbc06c628a3e1477eec0"
    },
    "question_id": "65a3e2286008f6f058d73038",
    "body": "I recommend using the $lookup stage for performing joins in MongoDB aggregation. Here's an example...",
    "author": "user123",
    "upvotes": 12,
    "downvotes": 3,
    "comments": [
      {
        "body": "I wasn't aware of the $lookup stage. This is very helpful!",
        "author": "user456"
      }
    ]
  }]);

  const [reviews, setReviews] = useState([]);

  // const getMovies = async () =>{

  //   try
  //   {
  //     const response = await axios.get("http://localhost:8080/api/questions");
  //     setQuestions(response.data);

  //   } 
  //   catch(err)
  //   {
  //     console.log(err);
  //   }
  // }

  // useEffect(() => {
  //   getMovies();
  // },[])

  return (
    <div className="question-list">
      {questions.map((question) => (
        <Question key={question._id.$oid} question={question} answers={answers} />
      ))}
    </div>
  );
};

export default QuestionList;
