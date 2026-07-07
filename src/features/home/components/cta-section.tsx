import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="bg-[linear-gradient(135deg,#fffdf8_0%,#f5ebcf_100%)] py-20">
      <Container>
        <div className="rounded-4xl border border-[#C8A74E]/20 bg-white/70 px-8 py-14 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur sm:px-10 lg:px-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A74E]">
                Siap memulai?
              </p>
              <h2 className="font-heading text-3xl font-semibold text-stone-950 sm:text-4xl">
                Kami Siap Menemani Anda dalam Investasi Emas Antam yang Aman dan Terpercaya.
              </h2>
              <p className="text-lg leading-8 text-stone-600">
                Hubungi tim kami untuk mendapatkan panduan lengkap dan memulai perjalanan investasi emas Antam Anda dengan percaya diri.
              </p>
            </div>
            <Button asChild>
              <Link href="https://wa.me/6281389616737?text=Hello%20I%20would%20like%20more%20information%20about%20Syifa%20Gold">
                Hubungi Kami
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}