import dbConnect from "@/server/utils/dbConnect"
import Todo from "@/server/models/Todo";
import { todos } from "@/data/todos";

dbConnect();
export default async function handler(req, res) {
   const {method,body} =req;
  if (method ==="POST") {
    const {formData}=body;
    await Todo.create({title:formData.title,description:formData.description});
   const todos= await Todo.find({});
    res.status(201).json({message:"now todo added",todos});
  
  }else if(method ==="GET"){
    const todos = await Todo.find({})
    res.status(200).json({ todos })
  }
}