import React, {useEffect, useState} from 'react';

function Counter(props) {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [info, setInfo] = useState({name:'', email:''});
    const [posts, setPosts] = useState([
        "post one",
        "post tow",
        "post three",
        "post four",
    ]);

    function addOne(){
        setCount(count+1);
    }

    function removeOne(){
        setCount(count-1);
    }

    function textHandler(event){
        setText(event.target.value)
    }

    function nameHandler(event){
        setInfo({...info, name:event.target.value})
    }

    function emailHandler(event){
        setInfo({...info, email:event.target.value})
    }

    function addPost(){
        setPosts([...posts, "new post"])
    }

    useEffect(
        ()=>console.log("useEffect is called")
        , [posts]
    )

    return (
        <div>
            <p>{count}</p>
            <button onClick={addOne}>Add one</button>
            <button onClick={removeOne}>Remove one</button>
            <p>Text: {text}</p>
            <p><input type={text} onChange={textHandler}/></p>
            <p>Name: {info.name}</p>
            <p><input type={text} onChange={nameHandler}/></p>
            <p>Email: {info.email}</p>
            <p><input type={text} onChange={emailHandler}/></p>
            {posts.map(post=>
                <p key={post}>{post}</p>
            )}
            <button onClick={addPost}>Add new post</button>
        </div>
    );
}

export default Counter;