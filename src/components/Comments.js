import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Comment from './Comment';
import Loading from './Loading';
import storeComments from '../actions/commentActions';

class Comments extends PureComponent {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}/comments`)
			.then(response => response.json())
			.then(json => this.props.storeComments(json))
	}
	render() {
		const { comments } = this.props;
		if (!comments) {
			return (
				<Loading />
			)
		}
		if (!comments.length) {
			return (
				<div className='italic'>
					No comments
				</div>
			)
		}
		return (
			<div>
				{
					comments.map((comment) => {
						return (
							<Comment key={comment.id} comment={comment} />
						)
					})
				}
			</div>
		);
	}
}
const mapStateToProps = ({ comments }) => ({
	comments,
});
export default connect(mapStateToProps, {
	storeComments,
})(Comments);
