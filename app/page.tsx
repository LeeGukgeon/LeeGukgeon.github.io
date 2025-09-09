import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";
const posts = getAllPosts();

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl mt-15 mb-5 mx-5">글 전체보기</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/post/${post.slug}`}>
              <div className="flex items-center space-x-3 p-2">
                <span className="text-xl">{post.emoji}</span>
                <p className="font-medium">{post.title}</p>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
