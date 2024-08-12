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
      <div className="w-full bg-primary bg-gradient-to-r from-primary to-violet-500 px-4 md:px-28 py-6 md:py-10 text-primary-foreground">
        <h1 className="text-left mb-2 md:mb-6">HopsApp</h1>
        <h2 className="mt-2 md:mt-6">
          A new and intuitive way to plan your studies
        </h2>
        <Button
          asChild
          className="bg-gradient-to-r from-purple-600 to-violet-600 shadow-md mt-6 hover:brightness-90"
        >
          <Link href="/calendar">Get started</Link>
        </Button>
      </div>

      <div className="px-4 md:px-28 py-6 md:py-24 flex flex-col justify-start items-start w-full">
        <h2 className="py-4">Your Ultimate Academic Planner</h2>
        HopsApp, the innovative calendar app designed specifically for academic
        students. Effortlessly plan and manage your university courses, ensuring
        you stay on top of your academic schedule.
        <h3 className="pt-8">Features:</h3>
        <ul className="py-4">
          <li className="py-1">
            <span className="font-bold">University Periods:</span> Easily
            organize your calendar by university periods, making it simple to
            track your academic timeline.
          </li>
          <li className="py-1">
            <span className="font-bold">Course Management:</span> Add, view, and
            manage your courses with ease. Place them on your calendar and get a
            clear overview of your academic commitments.
          </li>
          <li className="py-1">
            <span className="font-bold">Intuitive Planning:</span> Our
            user-friendly interface allows you to plan your studies efficiently,
            helping you balance your coursework and personal life.
          </li>
        </ul>
      </div>
    </main>
  );
}
