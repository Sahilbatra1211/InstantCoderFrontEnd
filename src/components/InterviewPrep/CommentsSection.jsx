import React, { useState } from 'react';
import './style.css';

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="section">
      <h2 className="section-title">Comments</h2>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2"
        placeholder="Share your recent interview experience"
      />
      <button
        onClick={addComment}
        className="search-button mt-2"
      >
        Add Comment
      </button>
      <ul className="mt-4">
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsSection;
