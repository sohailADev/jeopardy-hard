import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title:String,
    content:String
  
})

export default PostModel = mongoose.model("PostModel",postSchema) 