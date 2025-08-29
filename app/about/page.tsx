import Image from "next/image";
import Link from "next/link";
export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto my-8">
      <header className="flex items-center justify-between gap-4">
        <h1 className="min-w-[200px]">
          수학을 전공한 풀스택 개발자 이국건입니다
          <br />
          일단 개인블로그는 하나 있어야 할 것 같아서 만들었습니다
        </h1>
        <div className="flex flex-col gap-4">
          <Link href="https://github.com/LeeGukgeon">Github</Link>
          <Link href="https://velog.io/@lkukun/posts">velog</Link>
          {/* <Link href="/about">Resume(없음)</Link> */}
        </div>
        <Image
          src="/profile_square.jpg"
          alt="Profile Picture"
          width={250}
          height={250}
          className="rounded-full -mr-6"
        />
      </header>
    </div>
  );
}
