import React from 'react';

const Comment = React.memo(
    ({ comment }) => (
        <div className="comment-box" >
            <h4 href>{comment.email}</h4>
            <span className="italic">{comment.name}</span>
            <p>{comment.body}</p>
        </div>
    )
)
export default Comment;