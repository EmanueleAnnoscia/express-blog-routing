import express from "express";
import posts from "../data.js";

const router = express.Router();

// index
router.get("/", (res,req)=>{
    res.json({
        data : "lista di tutti i post",
        count: posts.length
    })
})

// show
router.get("/:id", (req, res)=>{
    const postID = req.params.id;
    const post = posts.find(curPost => curPost.id === postID)
    res.json({
        data: `Mostro i dettagli del post con id ${postID}`
    })
})

// store
router.post("/", (req, res)=>{
    res.json({
        data: "creo un nuovo post"
    })
})

// update
router.put("/:id", (req, res)=>{
    const postID = req.parmas.id;
    res.json({
        data : `Modifico interamente l'elemento con id ${postID}`
    })
})

// destroy
router.delete("/:id", (req, res)=>{
    const postId = req.params.id;
    res.json({
        data: `Cancello interamente il post con id ${postId}`
    })
})



export default router;