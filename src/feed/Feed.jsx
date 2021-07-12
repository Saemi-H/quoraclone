import React, { useState } from 'react';
import { useEffect } from 'react';
import Post from '../post/Post';
import Quorabox from '../quorabox/Quorabox';
import './Feed.css'
import db from "../firebase";

const Feed = () => {

    const [posts, setPosts] = useState([])

    
    useEffect(() => {
        db.collection("questions").orderBy('timestamp', 'desc').onSnapshot(snapshot => setPosts(snapshot.docs.map(
            (doc) => (({
                id: doc.id,
                question: doc.data()
            }))
        )))
    }, [])

    return (
        <div className="feed">
           <Quorabox />
          {posts.map(({id, question})=>(
              <Post key={id} Id={id} image={question.imageUrl}
              question={question.question} timestamp={question.timestamp}
              quoraUser={question.user}
              />
          ))}
        </div>
    );



    // test
};

export default Feed;