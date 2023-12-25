'use client';
// Note: the error will receive automaticaly a prop from Next.js
// export default function Error({ error }) {

export default function Error() {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Something went wrong.</p>
    </main>
  );
}
