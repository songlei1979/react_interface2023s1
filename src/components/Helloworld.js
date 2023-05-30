import React from 'react';

function Helloworld(props) {

    function clickMe(){
        alert("Clicked in Helloworld.js")
    }

    return (
        <div>
            <h1>Hello World - from Helloworld.js</h1>
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
            <button className={'btn btn-success'} onClick={clickMe}>Click Me</button>
        </div>
    );
}

export default Helloworld;