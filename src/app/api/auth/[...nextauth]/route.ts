import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const github_id = process.env.GITHUB_ID;
const github_secret = process.env.GITHUB_SECRET;

if (!github_id || !github_secret) {
  throw new Error("GITHUB_ID and GITHUB_SECRET must be set");
}

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: github_id,
      clientSecret: github_secret,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
