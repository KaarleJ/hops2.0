import Link from "next/link";

interface SideMenuItemProps {
  children: React.ReactNode;
  to?: string | undefined;
}

export default function SideMenuItem({ children, to }: SideMenuItemProps) {
  return (
    <div className="p-1 w-full h-full text-sm">
      <Link
        href={"/calendar" + (to ? `/${to}` : "")}
        className="p-1 w-full h-full hover:bg-accent rounded-sm transition-colors text-left"
      >
        {children}
      </Link>
    </div>
  );
}
