import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const dynamic = "force-static";

export default function Home() {
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
      <div className="w-full bg-primary bg-gradient-to-r from-primary to-violet-500 px-10 md:px-28 py-6 md:py-10 text-primary-foreground">
        <h1 className="text-left mb-2 md:mb-6">HopsApp</h1>
        <h2 className="mt-2 md:mt-6">
          A new and intuitive way to plan your studies
        </h2>
        <Button
          asChild
          className="bg-gradient-to-r from-purple-600 to-violet-600 shadow-md mt-6 hover:brightness-90"
        >
          <Link href="/api/auth/signin">Get started</Link>
        </Button>
      </div>

      <div className="px-4 md:px-28 py-6 md:py-24 flex flex-col justify-start items-start w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        venenatis, nunc nec tincidunt fermentum, nunc felis bibendum nisl, nec
        fermentum nunc dolor sit amet justo. Donec nec tortor nec lacus
        pellentesque ultricies. Nullam nec justo nec nunc fermentum malesuada.
        Donec eget velit at nunc tincidunt fermentum. Nullam nec justo nec nunc
        fermentum malesuada. Donec eget velit at nunc tincidunt fermentum.
        Nullam nec justo nec nunc fermentum malesuada. Donec eget velit at nunc
        tincidunt fermentum. Nullam nec justo nec nunc fermentum malesuada.
        Donec eget velit at nunc tincidunt fermentum. Nullam nec justo nec nunc
        fermentum malesuada. Donec eget velit at nunc tincidunt fermentum.
        Nullam
      </div>
    </main>
  );
}
