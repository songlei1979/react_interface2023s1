import React from 'react';
import {Link} from "react-router-dom";

function Nav(props) {
    return (
        <div>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/form"}>Form</Link></li>
                <li><Link to={"/loadup"}>Load Up</Link></li>
            </ul>
        </div>
    );
}

export default Nav;