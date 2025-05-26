import express from "express";
import posts from "../data.js";
import postController from "./controller/postController.js";

const router = express.Router();

// index
router.get("/", postController.index);

// show
router.get("/:id", postController.show);

// store
router.post("/", postController.store);

// update
router.put("/:id", postController.update);

// destroy
router.delete("/:id", postController.destroy );



export default router;