"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AvatarMenu from "./AvatarMenu";
import MobileMenu from "./MobileMenu";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <div className="md:px-24 md:py-6 w-screen fixed top-0 left-0 z-50">
      <nav className="py-2 px-4 md:px-36 bg-primary shadow-xl md:rounded-full text-lg text-primary-foreground flex flex-row justify-between items-center md:mr-4 z-50">
        <MobileMenu session={session} />
        <Link href="/" className="hover:text-muted-foreground w-24 text-center">
          <b>Hops</b>
        </Link>
        <Link
          href="/calendar"
          className="hover:text-muted-foreground hidden md:flex"
        >
          calendar
        </Link>
        <div className="flex flex-row items-center w-24">
          <ThemeToggle />
          {session ? (
            <AvatarMenu src={session.user?.image as string | undefined} />
          ) : (
            <Button asChild className="underline" size="dense" variant="ghost">
              <Link href="/api/auth/signin">sign in</Link>
            </Button>
          )}
        </div>
      </nav>
    </div>
  );
}
