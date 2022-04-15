const PORT =4002;
const database={}

const express =require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express()
app.use(bodyParser.json())
app.use(cors())

app.get('/posts',(req,res)=>{
    res.send(database)
})

app.post('/events',(req,res)=>{
    const {type,data} =req.body
    if(type==='PostCreated'){
        const {id,title}=data;
        database[id]={id,title,comments:[]}
    }else if(type==='CommentCreated'){
        const {id, content,postId}=req.body.data;
        const post=database[postId];
        
        // console.log(req.body)
        post.comments.push({id, content});
    }

    res.send({})
})

app.listen(PORT,()=>{
    console.log("The application is listenning on PORT\n"+PORT)
})