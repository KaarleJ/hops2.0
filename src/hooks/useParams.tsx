import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useParams() {
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();

  const setParam = (key: string, value: any) => {
    const current = new URLSearchParams(Array.from(search.entries()));
    current.set(key, value.toString());
    router.push(pathname + "?" + current.toString());
  };

  return { setParam, search };
}
