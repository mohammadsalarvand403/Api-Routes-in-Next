import nextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../server/lib/mongodb"

export default nextAuth({
    providers:[
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),
      
    ],
    adapter: MongoDBAdapter(clientPromise),
})