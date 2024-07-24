import { LoaderCircle } from "lucide-react";

export default function Loading({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full flex items-stretch justify-center ${className}`}>
      <LoaderCircle className="animate-spin text-6xl" />
    </div>
  );
}
