import postsRouter from "./routers/posts.js"
import express from "express";


const app = express();
const port = 3001;

app.use(express.static("public"));


// aggiungo la rotta principale
app.get("/", (req, res)=>{
    res.json({
        data:"<h1>benvenuti nelle API dei post</h1>"
    })
})

// tramite app prelevo i metodi dal posts.js 

app.use("/posts", postsRouter);

// server in ascolto
app.listen(port, ()=>{
    console.log(`server in ascolto alla porta ${port}`);
})
