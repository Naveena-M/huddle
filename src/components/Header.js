import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router';
import icons from '../icons/Svg';

class Header extends PureComponent {
	constructor(props) {
		super(props);
		this.state = { users: [], search: '' }
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users/')
			.then(response => response.json())
			.then(json => this.setState({ users: json }))
	}
	onTextChange = (e) => {
		this.setState({ search: e.target.value.toUpperCase() })
	}
	clearSearch = (e) => {
		this.setState({ search: '' })
		return true;
	}
	render() {
		return (
			<header className="App-header" title="Facebook">
				<Link
					href
					to={`/posts/`}
				>
					<icons.FbIcon />

				</Link>
				<input value={this.state.search} className="search-box-global clickclass" placeholder="search users" onChange={this.onTextChange} />
				{
					this.state.search && this.state.users.length &&
					<div className="global-search-list" id="glblSrchSugstnDrpdwnId">
						<div >
							{
								this.state.users.map((user) => {
									if (user.name.toUpperCase().indexOf(this.state.search) !== -1 || user.username.toUpperCase().indexOf(this.state.search) !== -1) {
										return (
											<Link
												href
												to={`/users/${user.id}/posts/`}
												key={user.id}
												onClick={() => { this.clearSearch() }}
											>
												{user.name}
											</Link>
										)
									}
									return null
								})
							}
						</div>
					</div>
				}
				{
					this.state.users && this.state.users.length ?
						<h4 className="italic">logged user: {this.state.users[0].username} </h4>
						: null
				}

			</header>
		)
	}
}
export default Header;