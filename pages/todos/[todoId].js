import { getOneTodo } from "../api/todos/[todoId]";

const TodoPage = ({todo}) => {
    return (
        <div className="">
            <h1>todo detail page</h1>
            <h2>title:{todo.title}</h2>
            <p>description:{todo.description}</p>
        </div>
      );
}
 
export default TodoPage;

export async function getServerSideProps(context){
    const {query}=context;
    const todo=await getOneTodo(query);

    return{
        props:{
            todo:JSON.parse(JSON.stringify(todo))
        }
    }
}
