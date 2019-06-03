import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    form {
        display:flex;
    }
`;

const Comment = styled.div`
    border:1px solid ${props => props.theme.color};
    /* border-top:0; */
    /* border-right:0; */
    border-left:0;
    /* border-radius: ${props => props.theme.borderRadiusAlt}; */
    border-radius: 4px 4px 0 0;
    font-size:0.75rem;
    margin: 0 8px 8px;

    strong {
        background: ${props => props.theme.color};
        border-radius: 4px 0 0 0;
        color: ${props => props.theme.background};
        font-weight:bold;
        font-size:0.75rem;
        padding:4px;
    }
`;

const Input = styled.input`
    border:1px solid ${props => props.theme.color};
    border-radius: ${props => props.theme.borderRadiusRoundBottom};
    color: ${props => props.theme.background};
    font-size:0.75rem;
    /* margin:${props => props.theme.margin}; */
    margin: 0 8px 0 8px;
    outline:none;
    padding:6px 4px;
    width:100%;
    &:hover {
      background: ${props => props.theme.color};
      cursor: pointer;
    }
`;

const LikeBar = styled.div`
    align-items:baseline;
    display:flex;

    h3 {
        font-size:1rem;
    }

    i {
        margin:12px 10px;
        &:hover {
            color: ${props => props.theme.icoHover};
            cursor: pointer;
        }
    }
`;

export default class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments,
            likes: this.props.likes,
            newComment: '',
        };
    }

    render() {
        return (
            <Wrapper>
                <LikeBar>
                    <i className="far fa-heart" onClick={this.addLike}></i>
                    <h3>{this.state.likes} likes</h3>
                </LikeBar>

                {this.state.comments.map(comment => {
                    const myKey = Date.now() * Math.random();
                    return (
                        <Comment key={myKey}>
                            <strong>{comment.username}</strong>
                                &nbsp;{comment.text}
                        </Comment>
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
    } // render() END

    formHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    addComment = e => {
        e.preventDefault();
        let myComment = {
            text: this.state.newComment,
            username: this.props.myName,
        }
        this.setState(prevState => ({
            comments: [...prevState.comments, myComment],
            newComment: '',
        }));
    }

    addLike = e => {
        this.setState(prevState => ({
            likes: prevState.likes + 1,
        }));
    }
} // CommentSection COMPONENT END

CommentSection.propTypes = {
    text: propTypes.string.isRequired,
    username: propTypes.string.isRequired,
}

CommentSection.defaultProps = {
    text: '',
    username: '',
}
