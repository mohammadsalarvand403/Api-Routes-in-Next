import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { getOneTodo } from "../api/todos/[todoId]";

const EditTodo = ({todo}) => {
    const [checked,setChecked]=useState(todo.isCompleted)
    const [formData,setFormData]=useState({
        title:todo.title,
        description:todo.description
      });
    const changeHandler=(e)=>{
        e.preventDefault();
        setFormData({...formData,[e.target.name]:e.target.value})
      }
      const submitHandler=(e)=>{
        e.preventDefault();
        axios.put(`/api/todos/${router.query.todoId}`,{todo:{...formData,isCompleted:checked}}).then((res)=>{
            router.push('/')
        }).catch((e)=>{
            console.log(e);
        })
      }
    const router =useRouter()
    return (
        <div className="">
        <h1>todo Edit page</h1>
                    <form className="w-full max-w-screen-md bg-white p-2 md:p-4 rounded-xl"
                    onSubmit={submitHandler}>
                    <div className="mb-4">
                        <label className="text-gray-600 mb-1 block"  htmlFor="todo-title">
                        Title
                        </label>
                    <input 
                    placeholder="todo title ..."
                    id="todo-title"
                    className="border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400
                    focus:border-none w-full block transition duration-300 ease-out"
                    type="text" 
                    name="title"
                    value={formData.title}
                    onChange={changeHandler} />
                    </div>
                    <div className="mb-8">
                        <label className="text-gray-600 mb-1 block" htmlFor="todo description">
                            Description
                    </label>
                    <textarea 
                    onChange={changeHandler}
                    value={formData.description}
                    name="description"
                        id="todo-description"
                        className="border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400
                        focus:border-none w-full block transition duration-300 ease-out"
                        ></textarea>
                </div>
                <input 
                name="checked"
                type="checkbox" 
                id="checked" 
                checked={checked}
                onChange={()=>setChecked(!checked)}                
                >
                </input>
                <label htmlFor="checked">isComplete todo</label>
                <div className="flex items-center gap-x-4">
                    <button onClick={()=>router.push("/")} type="button" 
                    className=" w-full py-2 text-blue-400 border border-blue-500 rounded-lg 
                    transition-all duration-300 text-ellipsis "
                    >
                      Back
                    </button>
                    <button type="submit" 
                    className=" w-full py-2 border border-blue-500 bg-blue-500 text-white rounded-lg
                    hover:bg-blue-600  duration-300 text-ellipsis "
                    >
                    Update Todo
                    </button>
                </div>
                </form>
        </div>
      );
}
 
export default EditTodo;

export async function getServerSideProps(context){
    const {query}=context;
    const todo=await getOneTodo(query);

    return{
        props:{
            todo:JSON.parse(JSON.stringify(todo))
        }
    }
}
