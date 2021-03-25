import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const mainPost = posts.slice(0, 5);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <div>
                {
                    mainPost.map(post => <Post
                        key={post.id}
                        post={post}
                    ></Post>)
                }
            </div>
        </div>
    );
};

export default Home;