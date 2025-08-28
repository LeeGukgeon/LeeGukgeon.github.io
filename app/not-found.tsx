"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl mb-6">404!</h1>
      <p className="text-xl mb-6">그런 url 페이지는 찾을 수 없어요</p>
      <Link href="/" className="px-4 py-2">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
