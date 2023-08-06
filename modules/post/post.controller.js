const Post = require("./post.model")

const getAllPosts = async (req, res) => {
  console.log("Hello")
  try {
    const posts = await Post.find()
    return res.status(200).send({
      success: true,
      results: posts.length,
      data: {
        posts,
      },
    })
  } catch (e) {
    return res.status(500).json({ success: false })
  }
}

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    return res.status(200).send({
      success: true,
      data: {
        post,
      },
    })
  } catch (e) {
    return res.status(500).json({ success: false })
  }
}

const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body)
    return res.status(201).send({
      success: true,
      data: {
        post,
      },
    })
  } catch (e) {
    return res.status(500).json({ success: false })
  }
}

module.exports = { getAllPosts, getPost, createPost }
