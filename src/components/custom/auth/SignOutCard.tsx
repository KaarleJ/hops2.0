"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signOut } from "next-auth/react";

export default function SignOutCard({ callbackUrl }: { callbackUrl: string }) {
  function handleSignOut() {
    signOut({ callbackUrl });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign out</CardTitle>
        <CardDescription>Sign out of your account</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={() => handleSignOut()}>Sign out</Button>
      </CardContent>
    </Card>
  );
}
