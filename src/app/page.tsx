import { getServerSession } from "next-auth";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div className="h-full shadow-lg">
        <Image
          src="/landing.webp"
          alt="landing"
          width={1000}
          height={1000}
          className="object-cover w-screen max-h-96"
        />
      </div>
      <div className="w-screen bg-primary bg-gradient-to-r from-primary to-violet-500 px-10 md:px-28 py-6 md:py-10 text-primary-foreground">
        <h1 className="text-left mb-2 md:mb-6">HopsApp</h1>
        <h2 className="mt-2 md:mt-6">
          A new and intuitive way to plan your studies
        </h2>
        <Button asChild className="bg-gradient-to-r from-purple-600 to-violet-600 shadow-md mt-6 hover:brightness-90">
          <Link
            href={session ? "/calendar" : "/api/auth/signin"}
          >
            Get started
          </Link>
        </Button>
      </div>

      <div className="px-4 md:px-28 py-6 md:py-24 flex flex-col justify-start items-start w-screen">
        {session ? (
          <>
            <h2>Welcome back {session.user?.name}!</h2>
          </>
        ) : (
          <></>
        )}
      </div>
    </main>
  );
}
