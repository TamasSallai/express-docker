const express = require("express")
const { getAllPosts, getPost, createPost } = require("./post.controller")

const router = express.Router()

router.get("/", getAllPosts)

router.get("/:id", getPost)

router.post("/", createPost)

module.exports = router
