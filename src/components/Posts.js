import React, { Component } from 'react';
import { connect } from 'react-redux';

import $ from 'jquery';
import Post from './Post';
import Loading from './Loading';
import storePosts from '../actions/postsActions';

class Posts extends Component {
	constructor(props) {
		super(props);
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
	componentWillReceiveProps(nextProps) {
		if (this.props.params.userId !== nextProps.params.userId) {
			let url = `https://jsonplaceholder.typicode.com/users/${nextProps.params.userId}/posts?_expand=user`
			this.fetchPosts(url)

		}
	}
	onScroll = (e) => {
		if (!this.props.params.userId) {
			const maxScrollTop = Math.floor(e.target.scrollHeight - e.target.clientHeight);
			let delta = Math.floor(e.target.scrollTop) - maxScrollTop;
			delta = delta < 0 ? -delta : delta
			if (delta < 2 && this.props.posts) {
				const page = (this.props.posts.length / 20) + 1
				let url = `https://jsonplaceholder.typicode.com/posts?_expand=user&_page=${page}&_limit=20`
				this.fetchPosts(url, 'append')
			}
		}
	}
	fetchPosts = (url, append = false) => {
		fetch(url)
			.then(response => response.json())
			.then(json => {
				if (append) {
					this.props.storePosts([...this.props.posts, ...json])
				} else {
					this.props.storePosts(json)
				}
			}, () => {
				this.props.storePosts(this.props.posts)
			})
	}
	componentWillUnmount() {
		const id = document.getElementById('parent')
		id.removeEventListener('scroll', this.onScroll)
	}
	render() {
		const { posts } = this.props;
		if (!posts) {
			return (
				<Loading />
			)
		}
		return (
			<div >
				{
					posts.map((post) => {

						return (
							<Post post={post} key={post.id} id={post.id} />
						)
					})
				}
			</div>
		)
	}
}
const mapStateToProps = ({ posts }) => ({
	posts,
});
export default connect(mapStateToProps, {
	storePosts,
})(Posts);
