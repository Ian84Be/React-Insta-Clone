import React from 'react';
import './CommentSection.css';

const CommentSection = (props) => {
    console.log(props.comments);
    return (
        <div className="comment-section">
            {props.comments.map(comment => {
                return (
                    <div className="comment">
                        <p><strong>{comment.username}</strong>
                        &nbsp;{comment.text}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default CommentSection;