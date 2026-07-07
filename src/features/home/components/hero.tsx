"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

const highlights = [
  "Emas Antam 24K asli",
  "Harga transparan dan kompetitif",
  "Pembelian aman & cepat",
];

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll<HTMLElement>("[data-animate]");
    if (!elements || elements.length === 0) return;

    gsap.fromTo(
      elements,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <section
      id="beranda"
      ref={heroRef}
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(200,167,78,0.18),_transparent_42%),linear-gradient(135deg,_#fdfbf6_0%,_#f8f2e8_100%)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,transparent_45%,rgba(255,255,255,0.35)_45%,rgba(255,255,255,0.35)_55%,transparent_55%)]" />
      <Container className="relative grid min-h-[calc(100vh-5rem)] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div className="max-w-2xl space-y-8">
          <div data-animate className="inline-flex items-center gap-2 rounded-full border border-[#C8A74E]/30 bg-white/80 px-4 py-2 text-sm font-medium text-stone-700 shadow-sm backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-[#C8A74E]" />
            Investasi Emas Terpercaya
          </div>

          <div className="space-y-5">
            <p data-animate className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A74E]">
              Investasi Emas Antam
            </p>
            <h1
              data-animate
              className="font-heading text-4xl font-semibold leading-tight text-stone-950 sm:text-5xl lg:text-6xl"
            >
              Lindungi nilai kekayaan Anda dengan kemewahan yang tenang.
            </h1>
            <p
              data-animate
              className="max-w-xl text-lg leading-8 text-stone-600 sm:text-xl"
            >
              Syifa Gold menghadirkan emas Antam original dengan proses transaksi yang aman, elegan, dan mudah dipahami.
            </p>
          </div>

          <div data-animate className="flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="https://wa.me/6281389616737?text=Hello%20I%20would%20like%20more%20information%20about%20Syifa%20Gold">
                Hubungi WhatsApp
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="#produk">Lihat Koleksi</Link>
            </Button>
          </div>

          <div data-animate className="flex flex-wrap gap-3 text-sm text-stone-600">
            {highlights.map((item) => (
              <span key={item} className="rounded-full bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div data-animate className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-0 -translate-y-6 rounded-4xl bg-[#C8A74E]/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-4xl border border-stone-200 bg-white/85 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.08)] backdrop-blur sm:p-8">
            <div className="rounded-3xl border border-[#C8A74E]/20 bg-[linear-gradient(135deg,#fffdf8_0%,#efe4be_100%)] p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A74E]">
                Pilihan premium
              </p>
              <div className="mt-6 space-y-5">
                <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-stone-500">Emas Antam 1 Gram</p>
                      <p className="font-heading text-2xl text-stone-950">Rp 2,950,000</p>
                    </div>
                    <div className="rounded-full bg-[#C8A74E]/15 px-3 py-1 text-sm font-medium text-[#8f6f24]">
                      Tersedia
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-stone-950 p-5 text-stone-100">
                    <p className="text-sm text-stone-400">Transaksi</p>
                    <p className="mt-2 font-heading text-2xl">24/7</p>
                  </div>
                  <div className="rounded-2xl bg-white p-5 text-stone-700">
                    <p className="text-sm text-stone-500">Pengiriman</p>
                    <p className="mt-2 font-heading text-2xl text-stone-950">Terkirim aman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}