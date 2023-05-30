import React, {Component} from 'react';

class LoadUp extends Component {

    constructor() {
        super();
        this.state={
            posts:[]
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response=>response.json())
            .then(data=>{this.setState({posts:data})})
    }

    render() {
        return (
            <div>
                {this.state.posts.map(
                    post=>
                        <p key={post.id}>{post.title}</p>
                )}
            </div>
        );
    }
}

export default LoadUp;