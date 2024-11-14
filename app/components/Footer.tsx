"use client";
import { FOOTER_LINKS } from "@/utils/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark-gray text-white py-16 min-h-[128px]">
      <nav className="max-w-7xl mx-auto px-4 items-center m-auto">
        <ul className="flex flex-wrap gap-x-11 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <li key={link.route}>
              <Link
                href="#"
                className="text-sm hover:text-primary-orange transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
