import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AvatarMenu from "./AvatarMenu";
import MobileMenu from "./MobileMenu";
import { getServerSession } from "next-auth";

export default async function Navbar() {
  const session = await getServerSession();
  return (
    <div className="px-2 py-4 md:px-24 md:py-6 w-full fixed top-0 left-0 z-50">
      <nav className="py-2 px-8 md:px-36 bg-primary shadow-xl rounded-full text-lg text-primary-foreground flex flex-row justify-between items-center">
        <Link href="/" className="hover:text-muted-foreground hover:">
          <b>Hops</b>
        </Link>
        <Link
          href="/calendar"
          className="hover:text-muted-foreground hidden md:flex"
        >
          calendar
        </Link>
        <div className="hidden md:flex flex-row items-center justify-between">
          <ThemeToggle />
          {session ? (
            <AvatarMenu src={session.user?.image as string | undefined} />
          ) : (
            <Link
              href="/api/auth/signin"
              className="text-lg ml-6 text-primary-foreground hover:text-muted-foreground underline"
            >
              sign in
            </Link>
          )}
        </div>
        <MobileMenu session={session} />
      </nav>
    </div>
  );
}
