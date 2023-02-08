import mongoose from "mongoose";

const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        unique:true,
        require:true
    },
    description:{
        type:String,
        require:true
    }
})
export default mongoose.models.Todo || mongoose.model('Todo',todoSchema)