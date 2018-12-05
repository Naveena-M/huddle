import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import Header from './Header';
import icons from '../icons/Svg';
import add1 from '../SIMPLE-ADS-1.jpg';
import add2 from '../SIMPLE-ADS-2.jpg';

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
							{
								this.props.location.pathname.indexOf('post') !== -1 &&
								<icons.TimeLineIcon />
							}
							Posts

						</Link>
					</h3>
					<h3>
						<Link
							href
							to={`/users/1/`}
							title="My Profile"
						>
							{
								this.props.params.userId && this.props.params.userId === '1' &&
								<icons.TimeLineIcon />
							}
							My Profile
						</Link>
					</h3>
				</div>
				<div>
					<div className="right-pane" id="parent">
						{this.props.children}
					</div>
				</div>
				<div>
					<div className="add-pane"  >
						<div className="post ">
							<h4 className="italic">
								sponsored

							</h4>
							<img src={add1} />
							<br />
							<span className="italic">
								SIMPLE ADS 1 | Coluna do Nene
							</span>
						</div>
						<div className="post ">
							<h4 className="italic">
								sponsored
							</h4>
							<img src={add2} />
							<br />
							<span className="italic">
								Google AdWords Made Simple
							</span>
						</div>
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
