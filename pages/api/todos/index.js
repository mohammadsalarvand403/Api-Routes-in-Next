import dbConnect from "@/server/utils/dbConnect"
import Todo from "@/server/models/Todo";

dbConnect();
export default async function handler(req, res) {
   
  
  // if (req.method ==="POST") {
  // //   const newTodo ={
  // //     id:Date.now(),
  // //     title:req.body.todo
  // //   }
  // // todos.push(newTodo);
  // // return res.status(201).json({meassge:"new Todos Added",todos});
  // }else 
  if(req.method ==="GET"){
    const todos = await Todo.find({})
    res.status(200).json({ todos })
  }
}