import NextAuth from 'next-auth/next';
import GitHubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from '../../../lib/prisma';


export default NextAuth({
  
  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
  ],
  adapter: PrismaAdapter(prisma),
});