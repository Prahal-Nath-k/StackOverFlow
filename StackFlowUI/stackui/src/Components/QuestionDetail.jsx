import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionDetail = ({ match }) => {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/get-question/${match.params.questionId}`);
        setQuestion(response.data);
      } catch (error) {
        console.error('Error fetching question:', error);
      }
    };

    fetchQuestion();
  }, [match.params.questionId]);

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{question.title}</h1>
      <p>{question.body}</p>
    </div>
  );
};

export default QuestionDetail;
