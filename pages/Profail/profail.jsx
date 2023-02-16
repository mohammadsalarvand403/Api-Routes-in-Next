import Layout from "@/containers/Layout";
import {signIn,useSession} from "next-auth/react"
const Profail = () => {
    const {data:session,status}=useSession({
        required:true,
        onUnauthenticated(){
            signIn()
        }
    });

    if (status === "loading") {
        <div>
            <p>Loading...</p>
        </div>
    }
    return ( 
        <Layout>
            {session &&(
                <h1>{session.user.name}, wellcome profail page</h1>
            )}
        </Layout>
     );
}
 
export default Profail;
<Layout>
    <h1>profail.page</h1>
</Layout>