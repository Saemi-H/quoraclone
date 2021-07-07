import React from 'react';
import Post from '../post/Post';
import Quorabox from '../quorabox/Quorabox';
import './Feed.css'

const Feed = () => {
    return (
        <div className="feed">
           <Quorabox />
           <Post />
        </div>
    );
};

export default Feed;