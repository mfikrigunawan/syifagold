"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Beranda", href: "#beranda" },
  { label: "Produk", href: "#produk" },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-50 border-b border-stone-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link href="#beranda" className="flex items-center gap-3">
          <Image
            src="/logos/syifagold.png"
            alt="Syifa Gold"
            width={120}
            height={48}
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-stone-600 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#C8A74E]">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 transition hover:border-stone-300 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/10 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div
            id="mobile-menu"
            className="fixed inset-x-0 top-0 z-50 border-b border-stone-200 bg-white/98 px-6 py-5 backdrop-blur md:hidden"
          >
            <nav className="flex flex-col gap-3 text-base font-medium text-stone-700">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 transition hover:bg-stone-50 hover:text-[#C8A74E]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}