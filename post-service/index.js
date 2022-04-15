const PORT=4000;
const database={}

const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const {randomBytes}=require('crypto')

// Middleware
app.use(bodyParser.json())


// Routes
app.get("/posts",(req,res)=>{
    res.send(database)
});

app.post("/posts",(req,res)=>{
    const {title}=req.body;
    const id=randomBytes(4).toString('hex')
    database={
        ...database,
        id: id,
        title:title
    }
    res.status(200).send(database[id])
})

app.listen(PORT,()=>{
    console.log(`Listening to : ${PORT}`)
})