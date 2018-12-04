import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Loading from './Loading';
class Post extends Component {
    constructor(props) {
        super(props);
    }
    onPostClick = (e) => {
        this.context.router.push(`/posts/${this.props.post.id}/`)
    }
    onUserClick=(e)=>{
        e.preventDefault()
        e.stopPropagation()
        this.context.router.push(`/users/${this.props.post.userId}/`)
    }
    render() {
        const { post } = this.props
        if (!post) {
            return (
                <Loading/>
            )
        }
        return (
            <div className="post cursor">
                <div
                    onClick={this.onPostClick}
                >
                    <h4 className="description">
                        <div className="avatar">
                            <span> {post.user.name[0]} </span>
                        </div>
                        <a
                            href="#"
                            onClick={this.onUserClick}
                        >
                            {post.user.name}
                        </a>
                        <br />

                    </h4>
                   
                    <h3>
                        {post.title}
                    </h3>
                    <p> {post.body}</p>
                    <span className="italic">
                       City: {post.user.address.city}
                    </span>
                </div>
            </div>
        )
    }
}
Post.contextTypes = {
    router: PropTypes.object.isRequired,
};
export default Post;
