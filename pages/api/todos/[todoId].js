import dbConnect from "@/server/utils/dbConnect";
import Todo from "@/server/models/Todo";
dbConnect();
export default async function handler(req, res) {
    const {method,query}=req;
    if (method === "DELETE") {
        await Todo.findByIdAndDelete(query.todoId);
        const todos= await Todo.find({});
        return res.status(200).json({message:"delete todo successfull",todos})
    }
  }