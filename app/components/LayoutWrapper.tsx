"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "@/app/components/ScrollToTop";
import { ROUTE } from "@/utils/constants";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState<boolean>(false);
  const isLoginPage = pathname === ROUTE.LOGIN;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="relative w-[150px] h-[150px] flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={144}
            height={64}
            priority
            className="z-10"
          />
          <div className="absolute inset-[-8px] border-2 border-primary-orange border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <>
      {!isLoginPage && <Header />}
      <main className="mt-[84px]">{children}</main>
      {!isLoginPage && <Footer />}
      <ScrollToTop />
    </>
  );
}
