// QuestionList.js
import React, { useState, useEffect } from 'react';
import Question from './Question';
import axios from 'axios'; // Import Axios or your preferred HTTP library

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  const [reviews, setReviews] = useState([]);

  const getMovies = async () =>{
    
    try
    {
      const response = await axios.get("http://localhost:8080/api/questions");
      setQuestions(response.data);

    } 
    catch(err)
    {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  },[])

  return (
    <div>
      {questions.map((question) => (
        <Question key={question._id.$oid} question={question} />
      ))}
    </div>
  );
};

export default QuestionList;
