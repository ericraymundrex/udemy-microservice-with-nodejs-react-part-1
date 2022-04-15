import styles from './PostCreate.module.css'
import { useState } from 'react'
import axios from 'axios'
const PostCreate=()=>{

    const [title,setTitle]=useState('');

    const titleHandler=event=>setTitle(event.target.value);

    const onSubmit=async event=>{
        event.preventDefault();
        await axios.post("http://localhost:4000/posts",{
            title
        });
        setTitle('');
    }

    return (
        <div className={"container " +styles.inputContainer}>
            <h3>Create Post</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control" 
                            onChange={titleHandler} 
                            value={title}/>
                </div>
                <button className="btn btn-primary"> Submit</button>
            </form>
        </div>
    )
}

export default PostCreate;