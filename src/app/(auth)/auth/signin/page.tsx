import { getProviders } from "next-auth/react";
import SignInCard from "@/components/custom/auth/SignInCard";
import { authOptions } from "../../../../../auth.config";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await getServerSession(authOptions);
  const providers = await getProviders();

  if (session) {
    redirect("/");
  }

  return <SignInCard providers={providers} />;
}
