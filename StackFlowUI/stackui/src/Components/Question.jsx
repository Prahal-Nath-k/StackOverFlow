// Question.js
import React from 'react';
import Answer from './Answer';

const Question = ({ question }) => {
  return (
    <div>
      <h2>{question.title}</h2>
      <p>{question.body}</p>
      <p>Author: {question.author}</p>
      <h3>Answers:</h3>
      {/* {question.answers.map((answer) => (
        <Answer key={answer._id.$oid} answer={answer} />
      ))} */}
    </div>
  );
};

export default Question;
