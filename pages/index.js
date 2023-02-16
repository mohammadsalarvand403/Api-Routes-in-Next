import AddNewTodo from "@/components/AddNewTodo/AddNewTodo";
import TodoList from "@/components/Todos/TodosList";
import Layout from "@/containers/Layout";
import Todo from "@/server/models/Todo";
import dbConnect from "@/server/utils/dbConnect";
import axios from "axios"
import {  useState } from "react"
export default function Home({todos}) {
 const [data,setData]=useState(todos);
  const deleteTodo=(id)=>{
    axios
    .delete(`/api/todos/${id}`)
    .then(({data})=>{
      setData(data.todos)
    }).catch(err=>console.log(err))
  };
  
  const addTodo=(e,formData)=>{
    e.preventDefault();
    axios
    .post(`/api/todos/`,{formData})
    .then(({data})=>{
      setData(data.todos)
    }).catch(err=>console.log(err))
  }
   const completeHandler=(id)=>{
    axios
    .put(`api/todos/complete/${id}`)
    .then(({data})=>{
      setData(data.todos)
    }).catch(err=>console.log(err))
   }
    
  return (
   <Layout>
    <div className="container p-2 xl:max-w-screen-xl mx-auto">
      <section className="flex md:flex-row md:items-start md:justify-center gap-x-8 flex-col
       gap-y-8 ">
        <AddNewTodo onAdd={addTodo}/>
        <TodoList data={data} onDelete={deleteTodo} onComplete={completeHandler}/>
      </section>
     </div>
   </Layout>
  )
  }
export async function getServerSideProps(context){
  dbConnect()
  const todos=await Todo.find({});

  return{
      props:{
          todos:JSON.parse(JSON.stringify(todos))
      }
  }
}