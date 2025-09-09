import { getPostBySlug, getAllPosts } from "@/lib/markdown";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import { Noto_Serif_KR } from "next/font/google";
const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"], // 한국어도 포함됨
  weight: ["200", "300", "400", "500", "600", "700", "900"], // 사용할 굵기
  display: "swap",
});
interface Props {
  params: Promise<{ slug: string }>; // Promise로 변경
}

export async function generateStaticParams() {
  const posts = getAllPosts(); // 모든 포스트 가져오기

  return posts.map((post) => ({
    slug: post.slug, // 각 포스트의 slug 반환
  }));
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params; // await로 Promise 해결
  const post = getPostBySlug(slug);

  if (!post) return <div>글을 찾을 수 없습니다.</div>;

  return (
    <div className={`${notoSerifKR.className} prose max-w-3xl mx-auto my-20`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[[rehypeKatex, { output: "mathml" }]]}
        components={{
          p: ({ node, ...props }) => <p className="my-2" {...props} />,
          h1: ({ node, ...props }) => (
            <h1 className="leading-normal" {...props} />
          ),
        }}
      >
        {post.content}
      </ReactMarkdown>
    </div>
  );
}
