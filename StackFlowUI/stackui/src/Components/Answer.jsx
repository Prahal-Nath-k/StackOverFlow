// Answer.js
import React from 'react';

const Answer = ({ answer }) => {
  return (
    <div>
      <p>{answer.body}</p>
      <p>Author: {answer.author}</p>
      {/* Display comments here */}
    </div>
  );
};

export default Answer;
