import React, { useState, useEffect } from 'react';
import Question from './Question';
import axios from 'axios';
import Answer from './Answer';

const QuestionList = () => {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/questions');
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchAnswers = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:8080/api/questions/${question._id.$oid}/answers`);
  //       setAnswers(response.data);
  //     } catch (error) {
  //       console.error('Error fetching answers:', error);
  //     }
  //   };

  //   fetchAnswers();
  // }, [question._id.$oid]);

  return (
    <div className="question-list">
      {questions?.map((question) => (
        <div key={question._id.$oid} className="question">
          <h2>{question.title}</h2>
          <p>{question.body}</p>
          <p>Author: {question.author}</p>
          <Answer question={question} />
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
