"use client";
import Link from "next/link";
import Image from "next/image";
import { MENU_DROPDOWN, NAVIGATION, ROUTE } from "@/utils/constants";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { XIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-primary-dark-gray text-white p-4 h-[84px]">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href={ROUTE.HOME}>
          <Image src="/logo.png" alt="logo" width={144} height={64} priority />
        </Link>
        <div className="flex gap-20">
          <div className="hidden md:flex gap-10">
            {NAVIGATION.map((nav) => {
              return (
                <Link
                  key={nav.route}
                  href={nav.route}
                  className="flex items-center gap-2 hover:text-primary-orange"
                >
                  <Image src={nav.icon} alt={nav.name} width={32} height={32} />
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
                    <Link href={menu.route} key={menu.route} className="">
                      <DropdownMenuItem className="p-2 h-[72px] items-center flex pl-7 pr-7 focus:text-primary-orange focus:bg-transparent cursor-pointer">
                        {menu.name}
                      </DropdownMenuItem>
                    </Link>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </header>
  );
}
