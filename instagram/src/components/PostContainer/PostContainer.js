import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
    return (

        props.posts.map(post => {
            return (
                <div className="post">
                    <header>
                        <img className="thumbnail" src={post.thumbnailUrl} alt="y"/>
                        <h1>{post.username}</h1>
                    </header>

                    <img src={post.imageUrl} alt="x" />
                    <h2>{post.likes} likes</h2>

                    <CommentSection comments={post.comments} />
                    <div className="time-stamp">{post.timestamp}</div>
                </div> //end post
            )
        })
    )
}
export default PostContainer;