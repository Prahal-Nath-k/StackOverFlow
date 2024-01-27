import React, { useState } from 'react';
import axios from 'axios';

const Answer = ({ questionId, answers }) => {
  const [votedAnswers, setVotedAnswers] = useState(new Set());

  const upVote = async (answerId) => {
    try {
      if (!votedAnswers.has(answerId)) {
        await axios.put(`http://localhost:8080/api/answers/${answerId}/upvote`);
        setVotedAnswers(new Set([...votedAnswers, answerId]));
      }
    } catch (error) {
      console.error('Error upvoting answer:', error);
    }
  };

  const downVote = async (answerId) => {
    try {
      if (!votedAnswers.has(answerId)) {
        await axios.put(`http://localhost:8080/api/answers/${answerId}/downvote`);
        setVotedAnswers(new Set([...votedAnswers, answerId]));
      }
    } catch (error) {
      console.error('Error downvoting answer:', error);
    }
  };

  return (
    <div>
      {answers.map((answer) => (
        <div key={answer.id} className='answer-content'>
          <div className='vote-content'>
            <button className='vote-button' onClick={() => upVote(answer.id)}>
              <i className='fas fa-chevron-up'></i>
            </button>
            <span className='vote-count'>{answer.upvotes}</span>
            <button className='vote-button' onClick={() => downVote(answer.id)}>
              <i className='fas fa-chevron-down'></i>
            </button>
          </div>
          <div className='answer'>
            <p>{answer.body}</p>
            <p>Author: {answer.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Answer;
