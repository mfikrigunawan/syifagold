import Image from "next/image";
import Link from "next/link";
import { Mail, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer id="kontak" className="border-t border-stone-200 bg-stone-950 text-stone-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div>
              <Image className="mb-2"
                src="/logos/syifagold.png"
                alt="Syifa Gold"
                width={200}
                height={48}
              />
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-stone-400 sm:text-base">
            Menghadirkan emas Antam original dengan proses transaksi yang aman dan pengiriman langsung ke tempat anda.
          </p>
        </div>

        <div className="space-y-6 h-40 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex flex-wrap gap-4 text-sm text-stone-400">
            <Link href="#beranda" className="transition hover:text-white">
              Beranda
            </Link>
            <Link href="#produk" className="transition hover:text-white">
              Produk
            </Link>
            <Link href="#tentang-kami" className="transition hover:text-white">
              Tentang Kami
            </Link>
            <Link href="#faq" className="transition hover:text-white">
              FAQ
            </Link>
          </div>
          <Link href="https://wa.me/6281389616737?text=Hello%20I%20would%20like%20more%20information%20about%20Syifa%20Gold" className="flex items-center gap-3 text-sm">
            <PhoneCall className="h-5 w-5 text-[#C8A74E]" />
            <span>+62 813-8961-6737</span>
          </Link>
          <Link href="mailto:syifafauz96@gmail.com" className="flex items-center gap-3 text-sm">
            <Mail className="h-5 w-5 text-[#C8A74E]" />
            <span>syifafauz96@gmail.com</span>
          </Link>
        </div>
        <p className="text-xs leading-7 text-stone-400 sm:text-xs">Copyright &copy;2024 Syifa Gold Official. All rights reserved.</p>

      </div>
    </footer>
  );
}