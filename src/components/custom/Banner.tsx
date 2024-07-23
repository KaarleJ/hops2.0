import Link from "next/link";
import { Button } from "../ui/button";

export default function Banner() {
  return (
    <Button
      asChild
      className="bg-gradient-to-r from-primary to-purple-500 py-2 px-4 h-16 w-44 self-start"
    >
      <Link href="/">
        <h2 className="text-3xl bg-clip-text bg-gray-700">HOPS</h2>
      </Link>
    </Button>
  );
}
