import React from 'react';
import Answer from './Answer';

const Question = ({ question, answers }) => {
  console.log('Answers in Question:', answers);

  return (
    <div className="question">
      <h2>{question.title}</h2>
      <p>{question.body}</p>
      <p>Author: {question.author}</p>
      <h4>{question.answers.length} {question.answers.length === 1 ? 'Answer' : 'Answers'}</h4>
      <Answer answers={question.answers} />
    </div>
  );
};

export default Question;
