// src/components/CommentSection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentSection = ({ lectureId }) => {
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');

    useEffect(() => {
        // Fetch comments
        axios.get(`/api/lectures/${lectureId}/comments`)
            .then(response => setComments(response.data))
            .catch(error => console.error('Error fetching comments:', error));
    }, [lectureId]);

    const handleAddComment = () => {
        axios.post(`/api/lectures/${lectureId}/comments`, { text: commentText })
            .then(response => {
                setComments([...comments, response.data]);
                setCommentText('');
            })
            .catch(error => console.error('Error adding comment:', error));
    };

    return (
        <div>
            <h3>Comments</h3>
            <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Add a comment"
            />
            <button onClick={handleAddComment}>Post Comment</button>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>{comment.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default CommentSection;
