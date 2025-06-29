import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>This is a starter template for a Next.js application.</p>
      <Link href="/signup">Signup</Link>
      <br/>
      <hr/>
      <Link href="/profile">Login</Link>
    </div>
  );
}
