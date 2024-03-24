import React from 'react';
import { TestItem } from "../types/TestItem";
export const HomeClient: React.FC = () => {
  return (
    <h1 >
      Welcome to <a href="https://nextjs.org">Next.js!</a>
    </h1>
  );
}

async function postData(): Promise<TestItem | null> {
    // postData関数の内容...
    return null; // 例として null を返します
}
