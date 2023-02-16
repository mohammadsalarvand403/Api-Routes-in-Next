import Layout from "@/containers/Layout";
import { getSession, useSession } from "next-auth/react";


const ProtectedSSr = () => {
    const {data:session, status}=useSession()
    return ( 
        <Layout>
            <h1>
                protected SSR
            </h1>
        </Layout>
         );
}
 
export default ProtectedSSr;

export async function getServerSideProps(contxt){
    const session = await getSession(contxt);
    return{
        props:{
            session,
        }
    }
    }