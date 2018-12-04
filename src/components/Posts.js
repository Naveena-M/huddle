import React, { Component } from 'react';
import $ from 'jquery';
import Post from './Post';
import Loading from './Loading';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: null }
    }
    componentDidMount() {
        let url = 'https://jsonplaceholder.typicode.com/posts?_expand=user&_page=1&_limit=20'
        if (this.props.params.userId) {
            url = `https://jsonplaceholder.typicode.com/users/${this.props.params.userId}/posts?_expand=user`
        }
        this.fetchPosts(url)
        const id = document.getElementById('parent')
        id.addEventListener('scroll', this.onScroll)
    }
    onScroll = (e) => {
        if (!this.props.params.userId) {
            const maxScrollTop = Math.floor(e.target.scrollHeight - e.target.clientHeight);
            let delta = Math.floor(e.target.scrollTop) - maxScrollTop;
            delta = delta < 0 ? -delta : delta
            if (delta < 2 && this.state.posts) {
                const page = (this.state.posts.length / 20) + 1
                let url = `https://jsonplaceholder.typicode.com/posts?_expand=user&_page=${page}&_limit=20`
                this.fetchPosts(url)
            }
        }
    }
    fetchPosts = (url) => {
        let posts = this.state.posts;
        if (!this.state.posts) {
            posts = [];
        }
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({ posts: [...posts, ...json] }))
    }
    componentWillUnmount() {
        const id = document.getElementById('parent')
        id.removeEventListener('scroll', this.onScroll)
    }
    render() {
        const { posts } = this.state;
        if (!posts) {
            return (
                <Loading />
            )
        }
        return (
            <div >
                {
                    this.state.posts.map((post) => {

                        return (
                            <Post post={post} key={post.id} id={post.id} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Posts;
