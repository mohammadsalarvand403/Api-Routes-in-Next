import { useState } from "react";

const AddNewTodo = ({onAdd}) => {
    const [value,setValue]=useState("");
 
    return ( 
  <form className="w-full max-w-screen-md bg-white p-2 md:p-4 rounded-xl"
  onSubmit={(e)=>onAdd(e,value)}>
    <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
        <button type="submit">Add New Todo</button>
  </form>
    );
}
 
export default AddNewTodo;