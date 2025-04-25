import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link href='/users'>Users</Link>
        <br />
        <Link href='/products'>produtos</Link>
      </nav>
    </div>
  );
}
