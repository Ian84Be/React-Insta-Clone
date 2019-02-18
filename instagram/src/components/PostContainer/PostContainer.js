import React from 'react';
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
                    <h3>{post.likes} likes</h3>
                    <CommentSection comments={post.comments} />
                    <div className="time-stamp">{post.timestamp}</div>
                </div> //end post
            )
        })
    )
}
export default PostContainer;