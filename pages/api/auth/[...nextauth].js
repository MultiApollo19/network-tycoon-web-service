import NextAuth from 'next-auth/next';
import GitHubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from '../../../prisma/client';


export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});