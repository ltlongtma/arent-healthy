import Link from "next/link";
import Image from "next/image";
import LoginForm from "@/app/components/LoginForm";
import { X } from "lucide-react";
import { ROUTE } from "@/utils/constants";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-background">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md relative">
        <Link
          href={ROUTE.HOME}
          className="absolute top-4 right-4 text-primary-dark-gray hover:text-primary-orange"
        >
          <X className="h-6 w-6" />
        </Link>
        <Image src="/logo.png" alt="logo" width={120} height={40} priority />
        <h1 className="text-2xl font-bold text-primary-dark-gray text-center mb-7">
          ログイン
        </h1>
        <LoginForm />
        <div className="mt-6 text-center">
          <Link
            href="#"
            className="text-primary-orange hover:underline text-sm"
          >
            パスワードをお忘れの方はこちら
          </Link>
        </div>
      </div>
    </div>
  );
}
