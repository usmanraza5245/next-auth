import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { getCsrfToken } from "next-auth/react";
const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;

        try {
          const response = await axios.post(
            "http://localhost:8000/api/auth/login",
            { email, password },
            { headers: { "Content-Type": "application/json" } }
          );
          return {
            token: response.data,
          };
        } catch (err) {
          throw new Error(err.response.status);
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      console.log("token...", token);
      console.log("user...", user);
      user && (token.user = user);
      return token;
    },
    session: ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};
export default NextAuth(authOptions);
