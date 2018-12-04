import React, { PureComponent } from 'react';
import Comment from './Comment';
import Loading from './Loading';

class Comments extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { comments: null }
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}/comments`)
            .then(response => response.json())
            .then(json => this.setState({ comments: json }))
    }
    render() {
        const { comments } = this.state;
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
                    this.state.comments.map((comment) => {
                        return (
                            <Comment key={comment.id} comment={comment} />
                        )
                    })
                }
            </div>
        );
    }
}

export default Comments;
