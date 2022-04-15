const PORT=4000;
const database={}

const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const {randomBytes}=require('crypto')
const cors=require('cors');
// Middleware
app.use(bodyParser.json())
app.use(cors())

// Routes
app.get("/posts",(req,res)=>{
    res.send(database)
});

app.post("/posts",(req,res)=>{
    const {title}=req.body;
    const id=randomBytes(4).toString('hex')
    database[id]={id:id,title:title}
    res.status(200).send(database[id])
})

app.listen(PORT,()=>{
    console.log(`POST service\nListening to : ${PORT}`)
})