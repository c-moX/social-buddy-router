import Comment from '../Comment/Comment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './PostDetail.css';

const PostDetail = () => {
    const { postId } = useParams();

    const [post, setPost] = useState({});
    const { id, title, body } = post;
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [postId])

    const [comments, setComments] = useState([]);
    useEffect( () => {
        const url =`https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [postId])

    return (
        <div className="post-detail-container">
            <h1>This is post detail component</h1>
            <div>
                <p><strong>ID NO: {id}</strong></p>
                <h4>Title: {title}</h4>
                <p>Body: {body}</p>
                <h1>Comments: {comments.length}</h1>
            </div>
            <div>
                {
                    comments.map(comment => <Comment comment={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default PostDetail;