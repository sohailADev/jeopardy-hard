import  express from 'express';
import  path  from 'path';
import  routes from './routes/index.js';
import  cors from 'cors';
import mongoose from 'mongoose';


const app  = express(); 
app.use(cors());
app.use('/posts',routes)
const PORT = 5000;
const MONGO_URL = 'mongodb+srv://sohailadev:sohailadev123@cluster0.haexe.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    app.listen(PORT, () => {
        console.log(`Express server listening on port ${PORT}!`);
    });
})
.catch((error) => console.log(error))


  