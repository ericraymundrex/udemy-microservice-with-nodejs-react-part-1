import axios from "axios";
import { Fragment,useState } from "react";

const CommentList=props=>{
    const [comments,setComments]=useState([]);
    const fetchData=async ()=>{
        const res=await axios.get(`http://localhost:4001/posts/${props.Id}/comments`);
        // console.log(res.data)
        setComments(res.data)
    }
    useState(()=>{
        fetchData();
    },[])
    ///posts/4af97e10/comments

    const AllComment=comments.map(comment=>{
            return <div key={comment.id}>
                <h3>{comment.content}</h3>
            </div>
        })
    // console.log(comments)
    return <Fragment>
        {AllComment}
    </Fragment>
}

export default CommentList;