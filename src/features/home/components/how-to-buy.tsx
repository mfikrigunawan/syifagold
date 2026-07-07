import { ArrowRight, MessageCircle, ShoppingBag, Wallet } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";
import Button from "@/components/ui/button";

const steps = [
  {
    title: "Konsultasi kebutuhan",
    description: "Kami membantu Anda memilih produk yang paling sesuai dengan tujuan investasi atau hadiah.",
    icon: MessageCircle,
  },
  {
    title: "Pilih produk",
    description: "Pilih emas Antam dan desain yang paling Anda sukai dari koleksi premium kami.",
    icon: ShoppingBag,
  },
  {
    title: "Lakukan transaksi",
    description: "Proses yang jelas, aman, dan cepat dari awal hingga barang sampai di tangan Anda.",
    icon: Wallet,
  },
];

export default function HowToBuy() {
  return (
    <Section className="bg-stone-950 text-stone-100">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="max-w-xl space-y-6">
          <Heading eyebrow="Cara membeli" className="text-white">
            <h2 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">Proses yang sederhana, aman, dan terasa premium.</h2>
          </Heading>
          <p className="text-lg leading-8 text-stone-400">
            Dari konsultasi hingga pengiriman, setiap langkah dirancang agar pengalaman Anda tetap tenang dan jelas.
          </p>
          <Button asChild variant="secondary" className="border-stone-700 bg-stone-900 text-stone-100 hover:bg-stone-800">
            <Link href="https://wa.me/6281389616737?text=Hello%20I%20would%20like%20more%20information%20about%20Syifa%20Gold">
              Mulai percakapan
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C8A74E]/15 text-[#C8A74E]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A74E]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-stone-400 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}