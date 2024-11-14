"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "@/app/components/ScrollToTop";
import { ROUTE } from "@/utils/constants";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === ROUTE.LOGIN;

  return (
    <>
      {!isLoginPage && <Header />}
      {children}
      {!isLoginPage && <Footer />}
      {!isLoginPage && <ScrollToTop />}
    </>
  );
}
