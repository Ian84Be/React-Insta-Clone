import React, { Component } from 'react';
import propTypes from 'prop-types';

import './CommentSection.scss';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            likes: props.likes,
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

    addComment = e => {
        e.preventDefault();
        let myComment = {
            text: this.state.newComment,
            username: this.state.myName
        }
        this.setState({
            comments: [...this.state.comments, myComment],
            newComment: '',
        });
    }

    addLike = e => {
        this.setState({
            likes: this.state.likes + 1,
        })
    }

    render() {
        return (
            <div className="comment-section">

                <div className="post-icons">
                    <i className="far fa-heart" onClick={this.addLike}></i>
                    <i className="far fa-comment"></i>
                </div>

                <h3>{this.state.likes} likes</h3>

                {this.state.comments.map((comment, index) => {
                    return (
                        <div className="comment" key={index}>
                            <p><strong>{comment.username}</strong>
                                &nbsp;{comment.text}</p>
                        </div>
                    )
                })}

                <form onSubmit={this.addComment}>
                    <input
                        name="newComment"
                        onChange={this.formHandler}
                        placeholder="add a comment..."
                        type="text"
                        value={this.state.newComment}
                        required />
                </form>

            </div> // end comment-section
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