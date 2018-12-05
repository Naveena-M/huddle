import React, { PureComponent, Component } from 'react';
import Posts from './Posts';
import Loading from './Loading';

class UserTimeline extends PureComponent {
	constructor(props) {
		super(props)
		this.state = { user: null }
	}
	componentDidMount() {
		fetch(`https://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
			.then(response => response.json())
			.then(json => this.setState({ user: json }))
	}
	componentWillReceiveProps(nextProps) {
		if (this.props.params.userId !== nextProps.params.userId) {
			fetch(`https://jsonplaceholder.typicode.com/users/${nextProps.params.userId}`)
				.then(response => response.json())
				.then(json => this.setState({ user: json }))
		}
	}
	render() {
		const { user } = this.state;
		if (!user) {
			return (
				<Loading />
			)
		}
		return (
			<div>
				<div className="profile-card post">
					<div className="avatar" title={user.username}>
						<span> {user.username[0]} </span>
					</div>
					<h2> {user.name} </h2>
					<h3>{user.username}</h3>
					<p className="italic" title={`mailto:${user.email}`}><a href={`mailto:${user.email}`}> {user.email} </a></p>
				</div>
				<Posts {...this.props} />
			</div>
		)
	}
}
export default UserTimeline