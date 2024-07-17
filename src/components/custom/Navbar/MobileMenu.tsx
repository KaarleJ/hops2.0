import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Session } from "next-auth";
import { MenuIcon } from "lucide-react";

export default function MobileMenu({ session }: { session: Session | null }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex md:hidden">
        <MenuIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {session && (
          <>
            <DropdownMenuLabel className="flex flex-col items-center">
              <Avatar>
                <AvatarImage src={session.user?.image as string | undefined} />
                <AvatarFallback>Avatar</AvatarFallback>
              </Avatar>
              {session.user?.name}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuItem>
          <Link href="/calendar">calendar</Link>
        </DropdownMenuItem>
        {session ? (
          <DropdownMenuItem>
            <Link href="/api/auth/signout">sign out</Link>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem>
            <Link href="/api/auth/signin">sign in</Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
