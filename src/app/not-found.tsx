// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center p-8 text-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">404 — Page Not Found</h1>
        <p className="mb-6">Sorry, the page you’re looking for doesn’t exist.</p>
        <Link href="/" className="underline text-blue-600 hover:text-blue-800">
          Go back home
        </Link>
      </div>
    </main>
  );
}
