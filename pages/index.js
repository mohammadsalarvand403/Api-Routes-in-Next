import AddNewTodo from "@/components/AddNewTodo/AddNewTodo";
import TodoList from "@/components/Todos/TodosList";
import axios from "axios"
import { useEffect, useState } from "react"
export default function Home() {
 const [data,setData]=useState(null);
 const [loading,setLoading]=useState(null);

 useEffect(() => {
  async function getData(){
    const {data}=await axios.get("/api/todos")
  setData(data.todos)
  }
getData()
  
 },[]);

  const deleteTodo=(id)=>{
    axios
    .delete(`/api/todos/${id}`)
    .then(({data})=>{
      setData(data.todos)
      setLoading(false)
    }).catch(err=>console.log(err))
  };
  
  const addTodo=(e,formData)=>{
    e.preventDefault();
    axios
    .post(`/api/todos/`,{formData})
    .then(({data})=>{
      setData(data.todos)
      setLoading(false)
    }).catch(err=>console.log(err))
  }
    if(loading) return<div>loading...</div>;

  return (
   <div>
     <nav className=" flex justify-center font-bold text-center py-3 px-3 border-b-2">
      <h1 className="">
        TodoList App Using Next.js & TailwindCss
      </h1>
     </nav>
     <div className="container p-2 xl:max-w-screen-xl mx-auto">
      <section className="flex md:flex-row md:items-start md:justify-center gap-x-8 flex-col
       gap-y-8 ">
        <AddNewTodo onAdd={addTodo}/>
        <TodoList data={data} onDelete={deleteTodo} />
      </section>
     </div>
   </div>
  )
}
