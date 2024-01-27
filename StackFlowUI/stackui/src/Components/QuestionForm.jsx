import React, { useState } from 'react';
import axios from 'axios';

const QuestionForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/api/post-question', { title, body });
    } catch (error) {
      console.error('Error posting question:', error);
    }
  };

  return (
    <div>
      <h2>Ask a Question</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Body:</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default QuestionForm;
