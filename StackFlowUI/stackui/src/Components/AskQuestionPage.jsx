import React, { useState, useEffect } from 'react';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';

const AskQuestionPage = () => {
  const [questions, setQuestions] = useState([]);

  const handleQuestionSubmit = (newQuestion) => {
    setQuestions((prevQuestions) => [newQuestion, ...prevQuestions]);
  };

  return (
    <div>
      <QuestionForm onQuestionSubmit={handleQuestionSubmit} />
      <QuestionList questions={questions} />
    </div>
  );
};

export default AskQuestionPage;
