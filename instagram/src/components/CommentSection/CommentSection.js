import React from 'react';
import propTypes from 'prop-types';

import './CommentSection.scss';

const CommentSection = (props) => {
    return (
        <div className="comment-section">
            {props.comments.map((comment, index) => {
                return (
                    <div className="comment" key={index}>
                        <p><strong>{comment.username}</strong>
                        &nbsp;{comment.text}</p>
                    </div>
                )
            })}
            <div className="add-comment">
            <input
                name="newComment"
                onChange={props.onChange}
                placeholder="Add a comment..."
                type="text"
                value={props.newComment}
                />
            </div>
        </div>
    );
}

CommentSection.propTypes = {
    text: propTypes.string.isRequired,
    username: propTypes.string.isRequired,
}

CommentSection.defaultProps = {
    text: '',
    username: '',
}

export default CommentSection;