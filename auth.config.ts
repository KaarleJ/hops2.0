import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client";

const github_id = process.env.GITHUB_ID;
const github_secret = process.env.GITHUB_SECRET;

if (!github_id || !github_secret) {
  throw new Error("GITHUB_ID and GITHUB_SECRET must be set");
}

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await prisma.user.findUnique({
          where: {
            email: user.email as string | undefined,
          },
        });
        await prisma.$disconnect();
        if (!dbUser) {
          throw new Error("No user found");
        }
        token.id = dbUser.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
      }
      return session;
    },
    async signIn({ user }) {
      let prismaUser = await prisma.user.findUnique({
        where: { email: user.email as string | undefined },
      });

      try {
        if (!prismaUser) {
          const dbUser = {
            name: user.name as string,
            email: user.email as string,
            avatarUrl: user.image as string,
          };
          prismaUser = await prisma.user.create({ data: dbUser });
        }
        user.id = prismaUser.id;
        return true;
      } catch (error) {
        console.error("Error signing in:", error);
        return false;
      } finally {
        await prisma.$disconnect();
      }
    },
  },
  providers: [
    GithubProvider({
      clientId: github_id,
      clientSecret: github_secret,
    }),
  ],
  pages: {
    verifyRequest: "/auth/verify-request",
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
  },
};
