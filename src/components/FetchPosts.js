import React, {useEffect, useState} from 'react';
import axios from "axios";

function FetchPosts(props) {

    const [posts, setPosts] = useState([]);

    useEffect(
        ()=>{
            axios.get("https://jsonplaceholder.typicode.com/posts")
                .then(response=>{
                    console.log(response.data);
                    setPosts(response.data);
                })
                .catch(err=>{
                    console.log(err);
                })
        }
    , [posts]);


    return (
        <div>
            {posts.map(post=>
            <p key={post.id}>{post.title}</p>
            )}
        </div>
    );
}

export default FetchPosts;