import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`

        h3 {
            font-size:0.75rem;
            margin: 0 8px;
        }

        .comment {
            border:1px solid ${props => props.theme.color};
            border-bottom:4px solid ${props => props.theme.color};;
            border-left:0;
            border-radius: ${props => props.theme.borderRadiusAlt};
            font-size:0.75rem;
            margin:${props => props.theme.margin};
            padding:0;

            strong {
            background: ${props => props.theme.color};
            border-radius: ${props => props.theme.borderRadius};
            color: ${props => props.theme.background};
            font-weight:bold;
            font-size:0.75rem;
            padding:6px;;
            }
        }

    form {
        border-top:1px solid ${props => props.theme.color};
        display:flex;
    }
`;

const Input = styled.input`
    border:1px solid ${props => props.theme.color};
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.background};
    font-size:0.75rem;
    margin:${props => props.theme.margin};
    outline:none;
    padding:6px 4px;
    width:100%;
    &:hover {
      background: ${props => props.theme.color};
      cursor: pointer;
    }
`;

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
            <Wrapper>
                <i className="far fa-heart" onClick={this.addLike}></i>
                {/* <i className="far fa-comment"></i> */}

                <h3>{this.state.likes} likes</h3>

                {this.state.comments.map((comment, index) => {
                    return (
                        <div className="comment" key={index}>
                            <strong>{comment.username}</strong>
                                &nbsp;{comment.text}
                        </div>
                    )
                })}

                <form onSubmit={this.addComment}>
                    <Input
                        name="newComment"
                        onChange={this.formHandler}
                        placeholder="add a comment..."
                        type="text"
                        value={this.state.newComment}
                        required />
                </form>

            </Wrapper>
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