import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";
export default function Page() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto">
      <h1>Posts 페이지</h1>
    </div>
  );
}
