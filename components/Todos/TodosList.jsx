import Link from "next/link";

const TodoList = ({data,onDelete,onComplete}) => {
  if(!data.length){
    return <p className="flex text-right justify-center">todos has Not yet been Added!</p>;
  }
    return ( 
        <div className="w-full max-w-screen-md bg-white p-2 md:p-4 rounded-xl">
        {data.map((todo)=>{
          return(
          <div key={todo.id} className=" flex items-center justify-between border 
        border-gray-100 mb-4 p-3 md:p-4 rounded-xl">
            <Link href={`/todos/${todo._id}`}>
              <span className={`${todo.isCompleted ? "line-through":""}`}>{todo.title}</span>
            </Link>
          
          <div className="flex gap-x-3 items-center">
            <button className="" onClick={()=>onComplete(todo._id)}>
           {todo.isCompleted ?  <svg className="w-6 h-6 stroke-green-400" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7045 4.15347C17.034 4.4045 17.0976 4.87509 16.8466 5.20457L8.84657 15.7046C8.71541 15.8767 8.51627 15.9838 8.30033 15.9983C8.08439 16.0129 7.87271 15.9334 7.71967 15.7804L3.21967 11.2804C2.92678 10.9875 2.92678 10.5126 3.21967 10.2197C3.51256 9.92682 3.98744 9.92682 4.28033 10.2197L8.17351 14.1129L15.6534 4.29551C15.9045 3.96603 16.3751 3.90243 16.7045 4.15347Z" fill="#4ade80"/>
            </svg>:<span className="w-5 h-5 block border-2 border-gray-500 rounded-full"></span>}
            </button>
            <button onClick={()=>onDelete(todo._id)}>
            <svg className="w-6 h-6 stroke-red-400" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.7404 9L14.3942 18M9.60577 18L9.25962 9M19.2276 5.79057C19.5696 5.84221 19.9104 5.89747 20.25 5.95629M19.2276 5.79057L18.1598 19.6726C18.0696 20.8448 17.0921 21.75 15.9164 21.75H8.08357C6.90786 21.75 5.93037 20.8448 5.8402 19.6726L4.77235 5.79057M19.2276 5.79057C18.0812 5.61744 16.9215 5.48485 15.75 5.39432M3.75 5.95629C4.08957 5.89747 4.43037 5.84221 4.77235 5.79057M4.77235 5.79057C5.91878 5.61744 7.07849 5.48485 8.25 5.39432M15.75 5.39432V4.47819C15.75 3.29882 14.8393 2.31423 13.6606 2.27652C13.1092 2.25889 12.5556 2.25 12 2.25C11.4444 2.25 10.8908 2.25889 10.3394 2.27652C9.16065 2.31423 8.25 3.29882 8.25 4.47819V5.39432M15.75 5.39432C14.5126 5.2987 13.262 5.25 12 5.25C10.738 5.25 9.48744 5.2987 8.25 5.39432" stroke="#F87171" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
            <Link href={`/edit/${todo._id}`}>
            <svg className="w-6 h-6 stroke-blue-400" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </Link>
          </div>
        </div>
          )
        })
        }
      </div>

     );
}
 
export default TodoList;