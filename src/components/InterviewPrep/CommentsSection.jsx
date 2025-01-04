import React, { useState } from 'react';

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
    <div>
      <h2 className="text-xl font-bold">Comments</h2>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2"
        placeholder="Share your recent interview experience"
      />
      <button
        onClick={addComment}
        className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
      >
        Add Comment
      </button>
      <ul className="list-disc pl-5 mt-4">
        {comments.map((comment, index) => (
          <li key={index} className="text-gray-700">{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsSection;
