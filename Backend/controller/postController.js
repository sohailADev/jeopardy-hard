import postModel from '../models/postModel'
import PostModel from '../models/postModel'


export const  createPost =  async (request,response)=>{
    try {
        const {title,content} = request.body;
        const newPost = PostModel.create({title,content})
        response.status(200).json(posts)
    } catch (error) {
        
    }
 }
export const  getPosts =  async (request,response)=>{
   try {
       const posts = PostModel.find();
       response.status(200).json(posts)
   } catch (error) {
       
   }
}
export const  getPost =  async (request,response)=>{
   try {
       const {id} = request.params;
       const post = PostModel.findById(id)
       response.status(200).json(post)
   } catch (error) {
       
   }
}