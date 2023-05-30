import React, {Component} from 'react';

class Loop extends Component {

    constructor() {
        super();
        this.state={
            langages:["Java", "C++", "Python"]
        }
    }

    render() {
        return (
            <div>
                {this.state.langages.map(
                    language=>
                <p key={language}>{language}</p>
                )
                }
            </div>
        );
    }
}

export default Loop;