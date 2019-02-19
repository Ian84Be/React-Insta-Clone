import React from 'react';
import propTypes from 'prop-types';

import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
    return (

        props.posts.map(post => {
            return (
                <div className="post" key={post.timestamp}>
                    <header>
                        <img className="thumbnail" src={post.thumbnailUrl} alt="y"/>
                        <h2>{post.username}</h2>
                    </header>

                    <img src={post.imageUrl} alt="x" />
                    <div className="post-icons">
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                    </div>
                    <h3>{post.likes} likes</h3>
                    <CommentSection
                        comments={post.comments}
                        newComment={post.newComment}
                        onChange={props.onChange}
                        />
                    <div className="time-stamp">{post.timestamp}</div>
                </div> //end post
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