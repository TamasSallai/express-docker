const express = require("express")
const mongoose = require("mongoose")
const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
  PORT,
} = require("../config/config")
const postRouter = require("./modules/post/post.router")

const app = express()

mongoose
  .connect(
    `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
  )
  .then(() => console.log("succesfully connected to DB"))
  .catch((e) => console.log(e))

app.use(express.json())
app.use("/api/posts", postRouter)

const port = PORT
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
)
