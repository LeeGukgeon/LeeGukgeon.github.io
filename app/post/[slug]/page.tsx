import { getPostBySlug } from "@/lib/markdown";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
interface Props {
  params: { slug: string };
}
export default async function BlogDetail({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) return <div>글을 찾을 수 없습니다.</div>;
  return (
    <div className="prose lg:prose-xl max-w-3xl mx-auto my-20">
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        components={{
          p: ({ node, ...props }) => (
            <p className="my-2 font-bold" {...props} />
          ),
          h1: ({ node, ...props }) => (
            <h1 className="text-5xl font-bold" {...props} />
          ),
        }}
      >
        {post.content}
      </ReactMarkdown>
      <div className="prose lg:prose-xl">
        <h1>My Blog Post Title</h1>
        <p>This is some content.</p>
        <ul>
          <li>Item 1</li>
        </ul>
      </div>
    </div>
  );
}
