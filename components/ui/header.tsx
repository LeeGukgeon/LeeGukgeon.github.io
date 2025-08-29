import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="flex justify-between gap-4 m-6 max-w-3xl mx-auto">
          <Link className="ml-4 text-lg font-bold" href="/">
            Gukgeon&apos;s Vibeblog
          </Link>
          <div className="flex gap-4">
            {/* <Link href="/">Posts</Link> */}
            <Link href="/about">About</Link>
            <Link href="/project">Projects</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
