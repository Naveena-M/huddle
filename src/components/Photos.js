import React, { PureComponent } from 'react';
import Loading from './Loading';

class Photos extends PureComponent {
	constructor(props) {
		super(props);
		this.state = { photos: null, user: null }
	}
	componentDidMount() {
		fetch(`https://jsonplaceholder.typicode.com/albums/${this.props.params.albumId}/photos`)
			.then(response => response.json())
			.then(json => this.setState({ photos: json }))
		fetch(`https://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
			.then(response => response.json())
			.then(json => this.setState({ user: json }))
	}
	render() {
		const { photos, user } = this.state;
		if (!photos || !user) {
			return (
				<Loading />
			)
		}
		return (
			<div className="post">
				<h2>@ {this.state.user.name}</h2>
				<h3 className="comments-header"> Photos </h3>
				<div>
					{
						this.state.photos.map((photo,index) => {
							if (index >5) {
								return null
							}
							return [
								<p>
									<h4 className="italic">{photo.title}</h4>
									<img src={photo.url} />
								</p>,
								<br />,
							]
						})
					}
				</div>
			</div>
		);
	}
}

export default Photos;
