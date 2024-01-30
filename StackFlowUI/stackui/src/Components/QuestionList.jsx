import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer';
import './questionList.css'

const QuestionList = () => {
  const [questions, setQuestions] = useState();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/questions/all-questions');
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchData();
  }, []); 

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const answersData = await Promise.all(
          questions.map(async (question) => {
            const questionAnswers = await Promise.all(
              question.answers.map(async (answerId) => {
                console.log(answerId.toString(), 'id');
                const response = await axios.get(`http://localhost:8080/answers/get-answer/${answerId.toString()}`);
                return response.data;
              })
            );
            return { ...question, answers: questionAnswers };
          })
        );
        setAnswers(answersData);
      } catch (error) {
        console.error('Error fetching answers:', error);
      }
    };

    fetchAnswers();
  }, [questions]); 

  return (
    <div className="question-list">
      {questions?.map((question) => (
        <div key={question._id.$oid} className="question">
          <h2>{question.title}</h2>
          <p>{question.body}</p>
          <p>Author: {question.author}</p>
          <Answer answers={answers} />
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
