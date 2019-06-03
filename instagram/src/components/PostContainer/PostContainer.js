
import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import CommentSection from '../CommentSection/CommentSection';

const Post = styled.div`
    background: ${props => props.theme.background};
    border: ${props => props.theme.elementBorder};
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.boxShadow};
    margin:12px 0;
    max-width: ${props => props.theme.maxWidth};
    padding-bottom:12px;
    line-height: ${props => props.theme.lineHeight};
    display: flex;
    flex-direction: column;
    width:100%;

    img {
        border-bottom:1px solid ${props => props.theme.color};
        max-width:100%;
        &.thumbnail {
            border:0;
        }
    }
`;

const PostHeader = styled.header`
    align-items:center;
    display:flex;
    margin: ${props => props.theme.margin};

    h2 {
        font-size: 0.75rem;
        font-weight: bold;
        margin:0 8px;
    }

    img {
        max-width:100%;
        &.thumbnail {
            border-radius:50%;
            width:24px;
        }
    }
`;

const TimeStamp = styled.div`
    /* background: ${props => props.theme.color}; */
    border:1px solid ${props => props.theme.color};
    border-top:0;
    border-radius: ${props => props.theme.borderRadiusRoundBottom};
    color: ${props => props.theme.color};
    font-size:0.33rem;
    font-weight:bold;
    margin:0 8px;
    padding:4px;
    width:30%;
`;

// START POST CONTAINER

const PostContainer = (props) => {
    return (
        props.posts.map(post => {
            const myKey = Date.now() * Math.random();
            return (
                <Post key={myKey}>

                    <PostHeader>
                        <img className="thumbnail" src={post.thumbnailUrl} alt="y" />
                        <h2>{post.username}</h2>
                    </PostHeader>

                    <img src={post.imageUrl} alt="x" />
                    <TimeStamp>{post.timestamp}</TimeStamp>

                    <CommentSection
                        comments={post.comments}
                        likes={post.likes}
                        myName={props.myName}
                        newComment={post.newComment}
                        onClick={props.onClick}
                        onSubmit={props.onSubmit}
                    />

                </Post>
            )
        })
    )
}

PostContainer.propTypes = {
    username: propTypes.string.isRequired,
    imageUrl: propTypes.string.isRequired,
    thumbnailUrl: propTypes.string.isRequired,
    timestamp: propTypes.string.isRequired,
    likes: propTypes.number,
    comments: propTypes.array,
}

PostContainer.defaultProps = {
    username: '',
    imageUrl: '',
    thumbnailUrl: '',
    timestamp: '',
    likes: 0,
    comments: [],
}

export default PostContainer;
