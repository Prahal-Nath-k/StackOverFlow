import React, { useState, useEffect } from 'react';
const Answer = ({ questionId, answers }) => {
  const filteredAnswers = answers.filter(answer => answer.question_id === questionId);

  const upVote = (up) => {
    try {
      //send up+1 to the api need to display the same in ui 
      const response = axios.put("http://localhost:8080/api/questions");
      // setQuestions(response.data);

    }
    catch (err) {
      console.log(err);
    }
  };

  const downVote = (up) => {
    try {
      //send down-1 to the api need to display the same in ui 
      const response = axios.put("http://localhost:8080/api/questions");
      // setQuestions(response.data);

    }
    catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {filteredAnswers.map((answer, index) => (
        <div className='answer-content'>
          <div className='vote-content'>
            <button className="vote-button" onClick={() => upVote(answer.upvotes)}>
              <i className="fas fa-chevron-up"></i>
            </button>
            <span className="vote-count">{answer.upvotes}</span>
            <button className="vote-button" onClick={() => downVote(answer.upvotes)}>
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
          <div key={index} className="answer">
            <p>{answer.body}</p>
            <p>Author: {answer.author}</p>
            {/* Display comments here */}
          </div>
        </div>

      ))}
    </div>
  );
};
export default Answer;
