// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center p-8 text-center">
      <div>
        <h1 className="text-3xl font-semibold mb-3">404 — Page not found</h1>
        <p className="mb-6">The page you’re looking for doesn’t exist.</p>
        <Link href="/" className="underline">Go back home</Link>
      </div>
    </div>
  );
}
