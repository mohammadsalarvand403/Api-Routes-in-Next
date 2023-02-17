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
    session:{
      strategy:"jwt"
    },
    jwt:{
      secret:process.env.SECRET_JWT
    },
    callbacks: {
      async session({ session, user, token }) {
        session.user.id=token.id;
        session.accessToken = token.accessToken;
        return session;
      },
      async jwt({ token, user, account, profile, isNewUser }) {
        if (user) {
          user.id=user.id
        }
        if (account) {
          token.accessToken = account.access_token
        }
        return token
      }

  }
})