import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import Header from './Header';
class App extends PureComponent {
	render() {
		return (
			<div>
				<Header />
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
					<div className="right-pane" id="parent">
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
