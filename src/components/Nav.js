import React from 'react';
import {Link} from "react-router-dom";

function Nav(props) {
    return (
        <div>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/form"}>Form</Link></li>
                <li><Link to={"/loadup"}>Load Up</Link></li>
                <li><Link to={"/fragment"}>Fragment</Link></li>
                <li><Link to={"/context-receiver"}>Context Receiver</Link></li>
            <li><Link to={"/counter"}>Counter</Link></li>
                <li><Link to={"/fetch-posts"}>Fetch Posts</Link></li>
                <li><Link to={"/reducer-counter"}>Reducer Counter</Link></li>
<li><Link to={"/reducer-load-posts"}>Load Data with Reducer</Link></li>

            </ul>
        </div>
    );
}

export default Nav;