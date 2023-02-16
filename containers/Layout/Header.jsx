import Link from "next/link";
import {signIn , signOut} from "next-auth/react"
const Header = () => {
    return (
        <nav className=" flex justify-between font-bold text-center py-3 px-3 border-b-2">
        <h1 className="">
         <a href="#">Todo List App</a>
        </h1>
        <ul className="flex items-center gap-x-6 ">
        <li>
          <Link href={"/"}>
          Home
          </Link>
          </li>
         <li>
         <Link href={"/todod"}>
          Todos
          </Link>
         </li>
         <li>
         <Link href={"/Profail/profail"}>
          profail
          </Link>
         </li>
        <li>
          <button onClick={()=>signIn('github')}>signin</button>
        </li>
        <li>
        <button onClick={()=>signOut('github')}>signout</button>
        </li>
        
        </ul>
       </nav>
      );
}
 
export default Header;

