import React, { Component } from 'react';
import { Link } from 'react-router';

import Comments from './Comments';
import Loading from './Loading';

class ViewPost extends Component {
	constructor(props) {
		super(props);
		this.state = { post: null }
	}
	componentDidMount() {
		fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.params.postId}?_expand=user`)
			.then(response => response.json())
			.then(json => this.setState({ post: json }))
	}
	render() {
		const { post } = this.state;
		if (!post) {
			return (
				<Loading />
			)
		}
		return (
			<div className="post">
				<div className="post">
					<h4 className="description">
						<Link
							href
							to={`/users/${post.userId}/`}
						>
							@{post.user.name}
						</Link>
					</h4>
					<br />
					{post.title}
					<p> {post.body}</p>
				</div>
				<hr />
				<h3 className="comments-header"> COMMENTS </h3>
				<Comments postId={post.id} />
			</div>
		);
	}
}

export default ViewPost;
