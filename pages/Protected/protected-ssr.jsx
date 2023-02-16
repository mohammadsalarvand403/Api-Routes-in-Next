import Layout from "@/containers/Layout";
import { getSession, useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";


const ProtectedSSr = () => {
    const {data:session, status}=useSession()
    return ( 
        <Layout>
            <h1>
                {session.user.name}, wellcome to protected SSR
            </h1>
        </Layout>
         );
}
 
export default ProtectedSSr;

export async function getServerSideProps(contxt){
    const session = await getSession(contxt);
if (!session) {
    return{
        redirect:{
            destination: "/api/auth/signin?callbackUrl=http://localhost:3000/Protected/protected-ssr" ,
            permanent: false
        }
    }
}

    return{
        props:{
            session,
        }
    }
    }