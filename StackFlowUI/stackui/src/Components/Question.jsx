import React from 'react';
import Answer from './Answer';

const Question = ({ question, answers }) => {
  return (
    <div className="question">
      <h2>{question.title}</h2>
      <p>{question.body}</p>
      <p>Author: {question.author}</p>
      <h4>{question.answers.length} Answers </h4>
      <Answer questionId={question._id.$oid} answers={answers} />
    </div>
  );
};

export default Question;
