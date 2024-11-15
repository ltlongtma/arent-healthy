"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "@/app/components/ScrollToTop";
import { ROUTE } from "@/utils/constants";
import { useEffect, useState } from "react";

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
        <div className="w-6 h-6 border-2 border-primary-orange border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <>
      {!isLoginPage && <Header />}
      <main>{children}</main>
      {!isLoginPage && <Footer />}
      <ScrollToTop />
    </>
  );
}
