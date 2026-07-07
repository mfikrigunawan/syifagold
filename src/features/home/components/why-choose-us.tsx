import { BadgeCheck, Clock3, Sparkles } from "lucide-react";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";

const benefits = [
  {
    title: "Transparansi Harga",
    description:
      "Kami menjaga harga tetap terbuka dan kompetitif agar Anda bisa berinvestasi dengan percaya diri.",
    icon: BadgeCheck,
  },
  {
    title: "Layanan Personal",
    description:
      "Setiap pelanggan mendapatkan arahan yang hangat, jelas, dan sesuai kebutuhan investasinya.",
    icon: Sparkles,
  },
  {
    title: "Proses Cepat",
    description:
      "Transaksi yang efisien dan tanggapan yang responsif membuat pengalaman Anda terasa mulus.",
    icon: Clock3,
  },
];

export default function WhyChooseUs() {
  return (
    <Section id="tentang-kami" className="bg-stone-50/70">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading eyebrow="Mengapa memilih Syifa Gold" className="mx-auto">
            Kepercayaan Dibangun Melalui Kualitas, Ketelitian, dan Nilai.
          </Heading>
          <p className="mt-4 text-lg leading-8 text-stone-600">
            Kami menggabungkan aksesibilitas modern dengan standar layanan premium untuk memberi Anda rasa aman saat membeli emas.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[1.75rem] border border-stone-200 bg-white p-8 shadow-sm">
                <div className="inline-flex rounded-2xl bg-[#C8A74E]/10 p-3 text-[#C8A74E]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-heading text-2xl text-stone-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}