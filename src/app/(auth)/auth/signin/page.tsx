import { getProviders } from "next-auth/react";
import SignInCard from "@/components/custom/auth/SignInCard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function SignIn() {
  const providers = await getProviders();
  const session = await getServerSession();

  session && redirect("/");

  return <SignInCard providers={providers} />;
}
