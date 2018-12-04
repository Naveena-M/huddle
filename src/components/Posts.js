import React, { Component } from 'react';

import Post from './Post';
import Loading from './Loading';


class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: null }
    }
    componentDidMount() {
        let url = 'https://jsonplaceholder.typicode.com/posts?_expand=user'
        if (this.props.params.userId) {
            url = `https://jsonplaceholder.typicode.com/users/${this.props.params.userId}/posts?_expand=user`
        }
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({ posts: json }))
    }
    render() {
        const { posts } = this.state;
        if (!posts) {
            return (
                <Loading />
            )
        }
        return [
            <div>
                {
                    this.state.posts.map((post) => {

                        return (
                            <Post post={post} key={post.id} id={post.id} />
                        )
                    })
                }
            </div>,
        ]
    }
}

export default Posts;
