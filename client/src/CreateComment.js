import axios from "axios";
import { Fragment, useState } from "react";

const CreateComment=props=>{
    const [comment,setComment]=useState([]);
    // console.log(props)
    const commentHandler=(event)=>{
        setComment(event.target.value);
    }
    const onSubmit=event=>{
        event.preventDefault();
        axios.post(`http://localhost:4001/posts/${props.Id}/comments`,{
            content:comment
        })
        setComment('')
    }
    return <Fragment>
        <form onSubmit={onSubmit}>
            <input value={comment} onChange={commentHandler}/>
            <button>Submit</button>
        </form>
    </Fragment>
}

export default CreateComment;