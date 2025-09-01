"use client";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Analytics() {
  const GA = process.env.NEXT_PUBLIC_GA_ID;
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    if (!(window as any).gtag || !GA) return;
    (window as any).gtag("event", "page_view", {
      page_path: pathname + (search?.toString() ? `?${search}` : "")
    });
  }, [pathname, search, GA]);

  if (!GA) return null;

  return (
    <>
      <Script id="ga4">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
      `}</Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-config" strategy="afterInteractive">{`
        gtag('js', new Date());
        gtag('config', '${GA}', { anonymize_ip: true });
      `}</Script>
    </>
  );
}
