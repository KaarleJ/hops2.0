import Link from "next/link";

interface SideMenuItemProps {
  children: React.ReactNode;
  to?: string | undefined;
}

export default function SideMenuItem({ children, to }: SideMenuItemProps) {
  return (
    <div className="p-1 w-full h-min text-sm my-2 py-1">
      <Link
        href={"/calendar" + (to ? `/${to}` : "")}
        className="p-1 w-full hover:bg-accent rounded-sm transition-colors text-left flex flex-row"
      >
        {children}
      </Link>
    </div>
  );
}
