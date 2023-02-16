import Link from "next/link";
import {signIn , signOut ,useSession} from "next-auth/react"
const Header = () => {
 const {data:session,status}=useSession();
    return (
        <nav className=" flex justify-between font-bold text-center py-3 px-3 border-b-2">
        <h1 className="">
         <a href="#">Todo List App</a>
        </h1>
        <ul className={`flex items-center gap-x-6 ${status ==="loading" && !session ? "opacity-0":"opacity-100"}`}>
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
         {!session &&status !== "loading" &&(
        <li>
           <button onClick={()=>signIn('github')}>Sign in</button>
        </li>
        )}
        {session && (
        <li>
         <button onClick={()=>signOut()}>Sign out</button>
        </li>
        )}
        
        </ul>
       </nav>
      );
}
 
export default Header;

