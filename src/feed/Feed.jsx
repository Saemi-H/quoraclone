import React, { useState } from 'react';
import { useEffect } from 'react';
import Post from '../post/Post';
import Quorabox from '../quorabox/Quorabox';
import './Feed.css'
import db from "../firebase";

const Feed = () => {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        db.collection("questions").orderBy('timestamp', 'desc')
        .onSnapshot(snapshot=>setPosts(snapshot.docs.map(doc=>
           ({ id: doc.id, question:doc.data})
        )))
    })
    return (
        <div className="feed">
           <Quorabox />
           <Post key={posts.key} Id={posts.id} image={posts.imageUrl} question={posts.question} timestamp={posts.timestamp} quoraUser={posts.user.displayName}/>
        </div>
    );



    // test
};

export default Feed;