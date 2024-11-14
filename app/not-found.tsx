import { ROUTE } from "@/utils/constants";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-212px)] flex items-center justify-center bg-primary-background">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">404</h2>
        <p className="text-xl mb-8">ページが見つかりませんでした</p>
        <Link
          href={ROUTE.DASHBOARD}
          className="inline-block bg-primary-orange text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}
