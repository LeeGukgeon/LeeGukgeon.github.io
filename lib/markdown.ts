import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "markdown_posts");

export function getAllPosts() {
  const files = fs.readdirSync(postsDir);
  return files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const content = fs.readFileSync(path.join(postsDir, file), "utf-8");
    const { data } = matter(content);

    return {
      slug,
      title: data.title ?? "",
      ...data,
    };
  });
}
export function getPostBySlug(slug: string) {
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);
  return { slug, frontMatter: data, content };
}
