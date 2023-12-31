'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AdminPage() {
  const [counter, setCounter] = useState(0);
  const router = useRouter();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>AdminPage</div>
      <div>Counter</div>
      <div>{counter}</div>
      <button onClick={() => setCounter((prevVal) => prevVal + 1)}>click</button>
      <button onClick={() => router.refresh()}>refresh</button>
    </div>
  );
}
