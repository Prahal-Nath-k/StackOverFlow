import React, { useState, useEffect } from 'react';
import Question from './Question';
import axios from 'axios';

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

  return (
    <div className="question-list">
    {questions.map((question) => (
      <Question key={question._id.$oid} question={question} answers={answers} />
    ))}
  </div>
  );
};

export default QuestionList;
