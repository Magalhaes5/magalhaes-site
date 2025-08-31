"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function routeToClass(path: string) {
  if (path.startsWith("/about")) return "bg-about";
  if (path.startsWith("/guides/buy")) return "bg-buy";
  if (path.startsWith("/guides/sell")) return "bg-sell";
  if (path.startsWith("/solutions")) return "bg-solutions";
  if (path.startsWith("/contact")) return "bg-contact";
  return "bg-home";
}

export default function PageBg() {
  const pathname = usePathname() || "/";
  useEffect(() => {
    const cls = routeToClass(pathname);
    const all = ["bg-home","bg-about","bg-buy","bg-sell","bg-solutions","bg-contact"];
    document.body.classList.remove(...all);
    document.body.classList.add(cls);
    return () => document.body.classList.remove(cls);
  }, [pathname]);
  return null;
}
