"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProviders } from "next-auth/react";
import { signIn } from "next-auth/react";
import { FaGithub as Github, FaGoogle as Google } from "react-icons/fa";

interface SignInCardProps {
  providers: Awaited<ReturnType<typeof getProviders>>;
}

export default function SignInCard({ providers }: SignInCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Sign in to access your account</CardDescription>
      </CardHeader>
      <CardContent>
        {Object.values(providers ?? []).map((provider) => (
          <div key={provider.name}>
            <Button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name} {ProviderIcon(provider.name)}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}


function ProviderIcon(providerName: string) {
  switch (providerName) {
    case "GitHub":
      return <Github size={24}  className="ml-1"/>;
    case "Google":
      return <Google size={24}  className="ml-1"/>;
    default:
      return null;
  }
}