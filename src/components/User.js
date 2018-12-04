import React, { Component } from 'react';
import { Link } from 'react-router';
import icons from '../icons/Svg';
import Photos from './Photos';
import Loading from './Loading';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = { albums: [], user: null }
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.params.userId}/albums`)
            .then(response => response.json())
            .then(json => this.setState({ albums: json }))
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
            .then(response => response.json())
            .then(json => this.setState({ user: json }))
    }
    render() {
        const { user } = this.state;
        if (!user) {
            return (
                <Loading />
            )
        }
        return (
            <div className="profile-card post ">
                <div className="avatar" title={user.username[0]}>
                    <span> {user.username[0]} </span>
                </div>
                <h2> {user.name} </h2>
                <h3>{user.username}</h3>
                <p className="italic" title={`mailto:${user.email}`}><a href={`mailto:${user.email}`}> {user.email} </a></p>
                <p><a href={user.website} target="_blank"> {user.website} </a></p>
                <span>
                    Company:{user.company.name}<br />
                    {user.company.catchPhrase}
                    {user.company.bs}<br />
                </span>
                <div className="italic">
                    <Link
                        href
                        to={`/users/${user.id}/posts/`}
                    >
                        <icons.TimeLineIcon />
                        See Timeline
                    </Link >
                </div>

                {/* Albums:
                <div>
                    {
                        this.state.albums.map((album) => {

                            return [
                                <p>
                                    Album title:{album.title}
                                    <Photos id={album.id} />
                                </p>,
                                <br />,
                            ]
                        })
                    }
                </div> */}

            </div>
        );
    }
}
export default User;
