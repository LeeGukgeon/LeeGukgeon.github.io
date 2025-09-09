---
emoji: "⚙️"
title: "30분만에 크롬 확장 프로그램 만들기"
date: "2025-02-26"
tags: ["Chrome", "extension"]
summary: "크롬 확장 프로그램을 만들어보기"
---

# 30분만에 크롬 확장 프로그램 만들기

![](https://velog.velcdn.com/images/lkukun/post/b080f5f7-25db-40ac-af94-128eef48c260/image.png)
내가 만든(gpt와 함께 만든) Page Summary Popup 크롬 확장 프로그램

노마드 코더의 크롬 확장앱 만들기
https://www.youtube.com/watch?v=QJSLtK2bY_A

---

1. ChatGPT 한테 manifest.json 만들라고 시키기
   ![](https://velog.velcdn.com/images/lkukun/post/e021a868-6a16-4f1c-b361-8132e450dda0/image.png)

```
{
  "manifest_version": 3,
  "name": "Page Summary Popup",
  "version": "1.0",
  "description": "현재 페이지의 내용을 요약하고 용도를 팝업으로 표시하는 크롬 확장 프로그램",
  "permissions": ["activeTab", "scripting"],
  "host_permissions": ["<all_urls>"],
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icons/icon16.png",
      "48": "icons/icon48.png",
      "128": "icons/icon128.png"
    }
  },
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"],
      "run_at": "document_end"
    }
  ]
}

```

![](https://velog.velcdn.com/images/lkukun/post/c3ac4583-f10a-49ca-8da0-45c5d22aa90b/image.png)

popup.html

```
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>페이지 요약</title>
    <style>
        body {
            width: 300px;
            padding: 10px;
            font-family: Arial, sans-serif;
        }
        h2 {
            font-size: 16px;
            margin-bottom: 10px;
        }
        p {
            font-size: 14px;
            white-space: pre-wrap;
        }
    </style>
</head>
<body>
    <h2>현재 페이지 요약</h2>
    <p id="summary">요약 중...</p>

    <script src="popup.js"></script>
</body>
</html>

```

popup.js

```
document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript(
            {
                target: { tabId: tabs[0].id },
                function: summarizePage
            },
            (results) => {
                if (results && results[0] && results[0].result) {
                    document.getElementById("summary").innerText = results[0].result;
                } else {
                    document.getElementById("summary").innerText = "요약을 가져올 수 없습니다.";
                }
            }
        );
    });
});

// 페이지에서 실행될 요약 함수
function summarizePage() {
    let text = document.body.innerText;
    text = text.replace(/\s+/g, " ").trim(); // 공백 정리
    let sentences = text.split(". ");
    if (sentences.length > 3) {
        return sentences.slice(0, 3).join(". ") + "..."; // 첫 3문장 출력
    }
    return text;
}
```

---

background.js 와 content.js 는 필요 없다고 한다
![](https://velog.velcdn.com/images/lkukun/post/1120bed3-98a0-4ac0-b5c3-2b3b33f87696/image.png)

![](https://velog.velcdn.com/images/lkukun/post/4fe5a334-335f-4432-8462-047ec0f765bb/image.png)

![](https://velog.velcdn.com/images/lkukun/post/ed978009-1bd3-43a2-a1fa-3e2890c2ef34/image.png)
3개 만들어서 아이콘 폴더에 넣고
![](https://velog.velcdn.com/images/lkukun/post/fa5ff0b5-7240-4e76-ba43-ec7de84ada6b/image.png)

크롬 확장프로그램, 개발자 모드에서 압축해제된 확장 프로그램을 로드합니다 클릭 후 만든 폴더 선택
![](https://velog.velcdn.com/images/lkukun/post/e9677b35-0b06-46e9-b344-f78d5f765fcf/image.png)

![](https://velog.velcdn.com/images/lkukun/post/bcd6fd75-3680-4f6a-bf74-19cdf0e98841/image.png)

![](https://velog.velcdn.com/images/lkukun/post/4829ef39-d2f2-4081-9f9b-3d7c5190efc8/image.png)

![](https://velog.velcdn.com/images/lkukun/post/d9074b30-2f0e-4bb8-aac8-81bbb3b7c415/image.png)

![](https://velog.velcdn.com/images/lkukun/post/70013148-5443-44d9-9969-acf93da73acc/image.png)

페이지 본문을 읽어와서 첫 3줄을 띄워주는 식의 요약으로 동작한다
