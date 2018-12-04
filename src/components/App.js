import React, { Component } from 'react';
import { Link } from 'react-router';

import icons from '../icons/Svg.js';
class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<header className="App-header">
					<icons.FbIcon />
				</header>
				<div className="left-pane">
						<h3>
							<Link
								href
								to={`/posts/`}
								title="All Posts"
							>
								Posts

						</Link>
						</h3>
						<h3>
							<Link
								href
								to={`/users/1`}
								title="My Profile"
							>
								My Profile
						</Link>
						</h3>
				</div>
				<div>
					<div className="right-pane">
						{this.props.children}
					</div>
				</div>
				<footer>
					<span>
						Copyright © 2018
					</span>
				</footer>
			</div>
		);
	}
}
export default App;
