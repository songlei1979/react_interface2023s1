import React, {useEffect, useReducer} from 'react';
import axios from "axios";
import {type} from "@testing-library/user-event/dist/type";

const initialState = {
    loading: true,
    posts: [],
    error:""
}

const reducer = (state, action) => {
    switch (action.type){
        case "SUCCESS":
            return{
                loading: false,
                posts: action.payload,
                error: ""
            }
        case "ERROR":
            return {
                loading: false,
                posts: [],
                error: "Error to load data"
            }
    }
}



function LoadDataWithReducer(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/post")
            .then(response=>{
                dispatch({type:"SUCCESS", payload:response.data})
            })
            .catch(err=>{
                dispatch({type:"ERROR"})
            })
    }, []);


    return (
        <div>
            {state.loading ? "Loading" :
                state.posts.map(post=>
                    <p key={post.id}>{post.title}</p>
                )
            }

            {state.error?state.error:null}
        </div>
    );
}

export default LoadDataWithReducer;