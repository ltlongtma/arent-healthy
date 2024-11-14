"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ROUTE } from "@/utils/constants";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[calc(100vh-212px)] flex items-center justify-center bg-primary-background">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">エラーが発生しました</h2>
        <p className="text-xl mb-8 text-primary-light-gray">
          申し訳ありませんが、問題が発生しました
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-primary-orange text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            もう一度試す
          </button>
          <Link
            href={ROUTE.HOME}
            className="bg-primary-dark-gray text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
