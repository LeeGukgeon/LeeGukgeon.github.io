---
emoji: "☕"
title: "개인 블로그에 후원 버튼 만들기"
date: "2025-09-10"
tags: []
summary: ""
---

# 내 블로그에 후원 버튼 만들기

[Hexo 블로그에 카카오페이 후원버튼 삽입하기](https://youngjinmo.github.io/2020/03/hexo-donation-card/)

위 블로그를 참고해서 후원 버튼을 만들어봐야겠다

```
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function AboutPage() {
  const [isDonationOpen, setIsDonationOpen] = useState(false);

  return (
    <div className="max-w-3xl mx-auto my-8">
      <header className="flex items-center justify-between gap-4">
        <h1 className="min-w-[200px] font-medium">
          수학을 전공한 풀스택 개발자 이국건입니다
          <br />
          일단 개인블로그는 하나 있어야 할 것 같아서 만들었습니다
        </h1>
        <div className="flex flex-col gap-4">
          <Link href="https://github.com/LeeGukgeon">Github</Link>
          <Link href="https://velog.io/@lkukun/posts">velog</Link>
          <button
            onClick={() => {
              setIsDonationOpen(!isDonationOpen);
            }}
          >
            Buy me a coffee
          </button>

          {isDonationOpen && (
            <div
              onClick={() => setIsDonationOpen(false)}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black/20"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-sm"
              >
                <h2 className="text-xl font-semibold mb-4">
                  Buy me a coffee ☕
                </h2>
                <Image
                  src="/donation.png"
                  alt="donationQR"
                  width={100}
                  height={100}
                  className="mb-4"
                />
                <p>블로그가 도움이 되었다면 다행이네요 😊</p>
              </div>
            </div>
          )}

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

```

![buymeacoffeeimg](http://leegukgeon.github.io/buymeacoffee1.png)
