const PORT =4001

const database={};

const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const {randomBytes}=require('crypto');
const cors=require('cors')
//Middleware
app.use(bodyParser.json());
app.use(cors())

//Routes
app.get("/posts/:id/comments",(req,res)=>{
    res.send(database[req.params.id]|| []);
});

app.post("/posts/:id/comments",(req,res)=>{
    const id = randomBytes(4).toString('hex');
    const {content} =req.body;

    const comments=database[req.params.id] || [];
    comments.push({id:id, content});

    database[req.params.id]=comments;
    res.send(database[req.params.id])
});

app.listen(PORT,()=>{
    console.log(`POST service\nListening to : ${PORT}`);
});