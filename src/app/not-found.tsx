import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container not-found">
      <h1>This page doesn&apos;t exist</h1>
      <p>The link may be old, or the project may have moved.</p>
      <Link href="/" className="button">
        See all works
      </Link>
    </main>
  );
}
