"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Error() {
  const search = useSearchParams();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Error</CardTitle>
        <CardDescription>Something went wrong</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{search}</p>
        <p className="my-6"><Link href='/auth/signin' className="underline">Sign in</Link> or return to <Link href='/' className="underline">home</Link></p>
      </CardContent>
    </Card>
  );
}
