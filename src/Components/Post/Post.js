import React from 'react';
import { useHistory } from 'react-router';
import './Post.css';

const Post = (props) => {
    const { id, title, body } = props.post;

    const history = useHistory();
    const showPost = id => {
        const url = `post/${id}`;
        history.push(url);
    }

    return (
        <>
            <div className="post-container">
                <p><strong>ID NO: {id}</strong></p>
                <h2>{title}</h2>
                <p>{body}</p>
                <button onClick={() => showPost(id)}>Show More</button>
            </div>
        </>
    );
};

export default Post;