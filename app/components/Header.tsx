"use client";
import Link from "next/link";
import Image from "next/image";
import { MENU_DROPDOWN, NAVIGATION, ROUTE } from "@/utils/constants";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { XIcon } from "lucide-react";
import { isLoggedIn, removeLoginCookie } from "@/utils/auth";
import { toast } from "sonner";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    removeLoginCookie();
    router.push(ROUTE.HOME);
    router.refresh();
    toast.success("ログアウトしました");
  };

  const handleHomeClick = () => {
    if (isLoggedIn()) {
      router.push(ROUTE.DASHBOARD);
    } else {
      router.push(ROUTE.HOME);
    }
  };

  if (!mounted) return null;

  return (
    <header className="bg-primary-dark-gray text-white p-4 h-[84px] fixed z-50 top-0 w-full">
      <nav className="container mx-auto flex justify-between items-center px-10">
        <Link
          href={ROUTE.HOME}
          onClick={(e) => {
            e.preventDefault();
            handleHomeClick();
          }}
        >
          <Image src="/logo.png" alt="logo" width={144} height={64} priority />
        </Link>

        {isLoggedIn() ? (
          <div className="flex gap-20">
            <div className="hidden md:flex gap-10">
              {NAVIGATION.map((nav) => {
                const isActive = pathname === nav.route;
                return (
                  <Link
                    key={nav.route}
                    href={nav.route}
                    className={`flex items-center gap-2 hover:text-primary-orange relative ${
                      isActive ? "text-primary-orange" : ""
                    }`}
                  >
                    <div className="relative">
                      <Image
                        src={nav.icon}
                        alt={nav.name}
                        width={32}
                        height={32}
                      />
                      {nav.name === "お知らせ" && (
                        <div className="absolute -top-1 -right-2 w-5 h-5 bg-primary-orange rounded-full flex items-center justify-center text-white text-xs">
                          1
                        </div>
                      )}
                    </div>
                    <span>{nav.name}</span>
                  </Link>
                );
              })}
            </div>
            {/* Menu dropdown */}
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Image
                    src="/icons/menu.svg"
                    alt="user"
                    width={32}
                    height={32}
                    className="cursor-pointer"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[280px] bg-primary-light-gray border-none text-white relative">
                  <XIcon
                    className="absolute top-2 right-2 text-primary-orange cursor-pointer w-[30px] h-[30px] z-10"
                    onClick={(e) => {
                      e.stopPropagation();
                      const closeEvent = new KeyboardEvent("keydown", {
                        key: "Escape",
                      });
                      document.dispatchEvent(closeEvent);
                    }}
                  />
                  {MENU_DROPDOWN.map((menu) => {
                    return (
                      <Link href={menu.route} key={menu.name} className="">
                        <DropdownMenuItem className="p-2 h-[72px] items-center flex pl-7 pr-7 focus:text-primary-orange focus:bg-transparent cursor-pointer">
                          {menu.name}
                        </DropdownMenuItem>
                      </Link>
                    );
                  })}
                  <DropdownMenuItem
                    className="p-2 h-[72px] items-center flex pl-7 pr-7 focus:text-primary-orange focus:bg-transparent cursor-pointer text-primary-orange"
                    onClick={handleLogout}
                  >
                    ログアウト
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ) : (
          <Link href={ROUTE.LOGIN}>
            <button className="text-primary-orange px-8 py-2 hover:opacity-90 transition-opacity">
              ログイン
            </button>
          </Link>
        )}
      </nav>
    </header>
  );
}
