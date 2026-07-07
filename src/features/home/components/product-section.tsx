import Image from "next/image";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";

const products = [
  {
    name: "Emas Logam Mulia Antam 0.5 Gram",
    detail: "Pilihan kecil yang praktis untuk memulai atau menambah koleksi investasi dengan mudah.",
    image: "/images/antam-0-5g.svg",
  },
  {
    name: "Emas Logam Mulia Antam 1 Gram",
    detail: "Ukuran populer untuk investasi jangka panjang yang tetap elegan dan mudah disimpan.",
    image: "/images/antam-1g.svg",
  },
  {
    name: "Emas Logam Mulia Antam 2 Gram",
    detail: "Tingkatkan nilai aset Anda dengan gramasi yang lebih besar dan potensi pertumbuhan yang stabil.",
    image: "/images/antam-2g.svg",
  },
  {
    name: "Emas Logam Mulia Antam 3 Gram",
    detail: "Solusi investasional untuk pelanggan yang ingin mengembangkan portofolio dalam wujud fisik.",
    image: "/images/antam-3g.svg",
  },
  {
    name: "Emas Logam Mulia Antam 5 Gram",
    detail: "Opsi premium bagi yang menginginkan nilai lebih besar dengan tampilan yang berkelas.",
    image: "/images/antam-5g.svg",
  },
];

export default function ProductSection() {
  return (
    <Section id="produk" className="bg-white">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Heading eyebrow="Produk unggulan" className="max-w-2xl">
            Koleksi emas yang dipilih untuk nilai, keindahan, dan ketenangan.
          </Heading>
          <p className="max-w-xl text-lg leading-8 text-stone-600">
            Setiap produk dirancang untuk menghadirkan kualitas premium yang cocok untuk investasi maupun hadiah.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.name} className="group rounded-[1.75rem] border border-stone-200 bg-stone-50 p-6 transition hover:-translate-y-1 hover:border-[#C8A74E]/40 hover:shadow-lg">
              <div className="relative h-90 lg:h-140 overflow-hidden rounded-3xl bg-white shadow-sm">
                <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
              </div>
              <h3 className="mt-6 font-heading text-2xl text-stone-950">
                {product.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">
                {product.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}