import { getProviders } from "next-auth/react";
import SignInCard from "@/components/custom/auth/SignInCard";

export const dynamic = "force-static";
export const revalidate = 300;

export default async function SignIn() {
  const providers = await getProviders();

  return <SignInCard providers={providers} />;
}
