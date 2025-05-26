import posts from "../data.js"


// SHOW
const show = (req, res)=>{
    const postID = req.params.id;
    const post = posts.find(curPost => curPost.id === postID)
    // debug
    console.log(res)

    if (post === undefined){
        res.status(404)
        return res.json({
            error : "post non trovato"
        })
    }
    
    res.json({
        data: `Mostro i dettagli del post con id ${postID}`
    })
};

// INDEX
const index = (req,res)=>{
    const tagsFilter = req.query.tags

    let result = posts;

    if(titleFilter !== undefined){
        result = posts.filter((curPost)=>
        curPost.tags.includes(tagsFilter)
        )
    }


    res.json({
        data : posts,
        count: posts.length
    })
    
};

// UPDATE
const update = (req, res)=>{
    const postID = req.params.id;
    res.json({
        data : `Modifico interamente l'elemento con id ${postID}`
    })
};

// STORE
const store = (req, res)=>{
    res.json({
        data: "creo un nuovo post"
    })
};

// DESTROY
const destroy = (req, res)=>{
    const postId = req.params.id;

    // const newArr = posts.filter((curPost)=> curPost.);

    const index = posts.findIndex((curPost)=> curPost.id === postId);

    posts.splice(index, 1);

    if (index === -1){
        res.status(404)
        return res.json({
            error: "Post non trovato"
        })
    }

    res.sendStatus(204)

    // res.json({
    //     data: `Cancello interamente il post con id ${postId}`
    // })
}

const postController = {
    show,
    index,
    update,
    store,
    destroy
};

export default postController;

