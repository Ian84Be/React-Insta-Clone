import React, { Component } from 'react';
import propTypes from 'prop-types';

import './CommentSection.scss';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments: props.comments,
            myName: props.myName,
            newComment: '',
            onChange: props.onChange,
         };
    }

    formHandler = e => {
        this.setState({
          [e.target.name]: e.target.value,
        })
      }

    onSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        console.log(this.state.myName);
        console.log(this.state.newComment);
        let addComment = {
            text: this.state.newComment,
            username: this.state.myName
        }
        this.setState({
            comments: [...this.state.comments, addComment],
            newComment: '',
        });
    }

    render() { 
        return (
            <div className="comment-section">
                {this.state.comments.map((comment, index) => {
                    return (
                        <div className="comment" key={index}>
                            <p><strong>{comment.username}</strong>
                            &nbsp;{comment.text}</p>
                        </div>
                    )
                })}
                <div className="add-comment">
                <form onSubmit={this.onSubmit}>
                <input
                    name="newComment"
                    onChange={this.formHandler}
                    placeholder="add a comment..."
                    type="text"
                    value={this.state.newComment}
                    />
                </form>
                </div>
            </div>
        );
    }

    
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