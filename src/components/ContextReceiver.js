import React, {useContext} from 'react';
import {myContext} from "../App";

function ContextReceiver(props) {
    const data = useContext(myContext)

    return (
        <div>
            <p>Context Receiver</p>
            {data}
        </div>
    );
}

export default ContextReceiver;