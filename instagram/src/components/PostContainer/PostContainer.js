import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import CommentSection from '../CommentSection/CommentSection';

const Post = styled.div`
    background: ${props => props.theme.background};
    border: ${props => props.theme.elementBorder};
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.boxShadow}
    margin:12px 0;
    max-width: ${props => props.theme.maxWidth};
    padding-bottom:12px;
    line-height: ${props => props.theme.lineHeight};
    display: flex;
    flex-direction: column;
    width:100%;

    i {
        margin: ${props => props.theme.margin};
        &:hover {
            color: ${props => props.theme.icoHover}
            cursor: pointer;
        }
    }

    img {
        max-width:100%;
        &.thumbnail {
            border-radius:50%;
            width:24px;
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
    color: ${props => props.theme.color};
    font-size:0.33rem;
    margin:0 8px;
`;

const PostContainer = (props) => {
    return (
        props.posts.map(post => {
            return (
                <Post key={post.timestamp}>

                    <PostHeader>
                        <img className="thumbnail" src={post.thumbnailUrl} alt="y" />
                        <h2>{post.username}</h2>
                    </PostHeader>

                    <img src={post.imageUrl} alt="x" />

                    <CommentSection
                        comments={post.comments}
                        likes={post.likes}
                        myName={props.myName}
                        newComment={post.newComment}
                        onChange={props.onChange}
                        onClick={props.onClick}
                        onSubmit={props.onSubmit}
                    />

                    <TimeStamp>{post.timestamp}</TimeStamp>

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