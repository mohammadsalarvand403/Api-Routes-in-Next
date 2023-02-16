import Layout from "@/containers/Layout";
import dbConnect from "@/server/utils/dbConnect";
import { getOneTodo } from "../api/todos/[todoId]";

const TodoPage = ({todo}) => {
    return (
        <Layout>
        <div className=" ">
        <h1 className="text-lg font-bold mb-4">todo detail page</h1>
        <h2><strong className="font-bold">title:</strong>{todo.title}</h2>
        <p><strong className="font-bold">description:</strong>{todo.description}</p>
        </div>
        </Layout>
      );
}
 
export default TodoPage;

export async function getServerSideProps(context){
    dbConnect()
    const {query}=context;
    const todo=await getOneTodo(query);

    return{
        props:{
            todo:JSON.parse(JSON.stringify(todo))
        }
    }
}
