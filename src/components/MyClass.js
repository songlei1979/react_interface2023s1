import React, {Component} from 'react';

class MyClass extends Component {
    constructor() {
        super();
        this.state={
            position:"Senior Lecturer",
            id: "1386694"
        }
    }

    clickMe(){
        alert("Clicked in MyClass.js")
    }

    render() {
        return (
            <div>
                <h1>From my class js file</h1>
                <p>name: {this.props.name}</p>
                <p>age: {this.props.age}</p>
                <p>position: {this.state.position}</p>
                <p>id: {this.state.id}</p>
                <button onClick={this.clickMe}>Click Me</button>
                <button onClick={this.props.myclick}>Click Me</button>
            </div>
        );
    }
}

export default MyClass;