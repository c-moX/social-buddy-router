import React from 'react';
import './Comment.css';

const Comment = (props) => {
    const { id, email } = props.comment;

    return (
        <div className="comment-container">
            <h5>Comments: {id}</h5>
            <p>Email: {email}</p>
        </div>
    );
};

export default Comment;