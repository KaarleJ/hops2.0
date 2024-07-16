import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="px-24 py-12 w-screen fixed top-0 left-0">
      <nav className="px-48 py-6 bg-primary shadow-xl rounded-full text-xl text-primary-foreground flex flex-row justify-between">
        <Link href="/"><b>Hops</b></Link>
        <Link href="/calendar">calendar</Link>
        <ThemeToggle />
      </nav>
    </div>
  );
}
