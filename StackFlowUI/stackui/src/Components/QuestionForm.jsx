import React, { useState } from 'react';
import axios from 'axios';
import './QuestionForm.css'; 

const QuestionForm = ({ onQuestionSubmit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/questions/post-question', {
        title,
        body,
        author: 'User123', 
            });

      onQuestionSubmit(response.data);
      setTitle('');
      setBody('');
    } catch (error) {
      console.error('Error submitting question:', error);
    }
  };

  return (
    <div className="question-form-container"> {/* Apply styles to this container */}
    <h2>Ask a Question</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" value={title} onChange={handleTitleChange} required />

      <label htmlFor="body">Body:</label>
      <textarea id="body" value={body} onChange={handleBodyChange} required />

      <button type="submit">Submit Question</button>
    </form>
  </div>
  );
};

export default QuestionForm;
