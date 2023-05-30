import React, {Component} from 'react';

class Condition extends Component {

    constructor() {
        super();
        this.state={
            name:"Lei Song"
        }
    }

    changeName(){
        this.setState({
            name:this.state.name==="Lei Song"?"Gerard Lovell":"Lei Song"
        })
    }

    render() {
        return (
            <div>
                <h1>name: {this.state.name}</h1>
                <button onClick={()=>this.changeName()}>Change</button>
            </div>
        );
    }
}

export default Condition;