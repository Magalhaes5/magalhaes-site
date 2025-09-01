'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function NotFoundContent() {
  const searchParams = useSearchParams();
  const from = searchParams.get('from');

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>404 - Page Not Found</h1>
      {from && <p>You tried to reach from: <code>{from}</code></p>}
      <p>Sorry, the page you were looking for does not exist.</p>
    </div>
  );
}

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', marginTop: '5rem' }}>Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  );
}
