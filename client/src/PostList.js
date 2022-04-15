import { useState,useEffect } from "react";
import axios from "axios";
import styles from './PostList.module.css'

import CreateComment from "./CreateComment";
import CommentList from "./CommentList";
const PostList=()=>{
    const [posts,setPosts]=useState({});

    const fetchPost=async()=>{
        const res=await axios.get("http://localhost:4000/posts");
        setPosts(res.data)
    }

    useEffect(()=>{
        fetchPost()
    },[])

    const renderPosts=Object.values(posts).map(post=>{
        // console.log(post.id)
        return <div className="card"
                    style={{width:'30%',marginBottom:'20px'}}
                    key={post.id}
                    >
                     <div className="card-body">
                            <h3>{post.title}</h3>
                    </div>
                    <CreateComment Id={post.id}/>
                    <CommentList Id={post.id}/>
            </div>
    })
    // console.log(posts)
    return (
    <div className={"container "+styles.postList}>
    <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderPosts}
            
    </div>
    </div>
)
}

export default PostList;