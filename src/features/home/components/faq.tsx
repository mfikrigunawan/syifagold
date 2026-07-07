import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";

const faqs = [
  {
    question: "Apakah ada opsi pembelian dengan cicilan?",
    answer: "Saat ini, kami hanya menawarkan pembelian secara tunai. Namun, kami selalu berusaha untuk menyesuaikan layanan dengan kebutuhan pelanggan.",
  },
  {
    question: "Bagaimana cara melakukan pembayaran?",
    answer: "Pembayaran dapat dilakukan melalui transfer bank dan COD (Cash on Delivery). Tim kami akan memberikan panduan lengkap saat proses pembelian.",
  },
  {
    question: "Bagaimana proses pengiriman?",
    answer: "Tim kami akan melakukan proses pengiriman langsung ke tempat Anda dengan aman. Tim kami akan mengatur pengiriman sesuai dengan lokasi dan preferensi Anda.",
  },
  {
    question: "Apakah ada garansi untuk produk yang dibeli?",
    answer: "Ya. Setiap pembelian dilengkapi dengan sertifikat keaslian dan jaminan kualitas.",
  },
  {
    question: "Bagaimana cara memeriksa keaslian emas?",
    answer: "Anda dapat memeriksa keaslian produk melalui aplikasi CertiEye atau menghubungi tim kami untuk panduan lebih lanjut.",
  },
  {
    question: "Apakah ada layanan konsultasi sebelum membeli?",
    answer: "Tentu. Tim kami siap memberikan konsultasi untuk membantu Anda memilih produk yang sesuai dengan kebutuhan investasi atau hadiah.",
  },
  {
    question: "Apakah ada batasan jumlah pembelian?",
    answer: "Tidak ada batasan jumlah pembelian selama stok tersedia. Anda dapat membeli sesuai kebutuhan dan preferensi Anda.",
  },
  {
    question: "Apakah ada layanan pengiriman ke luar kota?",
    answer: "Untuk saat ini, kami hanya menyediakan pengiriman di wilayah Jakarta. Silakan hubungi tim kami untuk informasi lebih lanjut mengenai layanan pengiriman.",
  },
];

export default function FAQ() {
  return (
    <Section id="faq" className="bg-stone-50/70">
      <Container className="max-w-4xl">
        <Heading eyebrow="FAQ" className="text-center">
          Pertanyaan yang Sering Diajukan Tentang Pembelian Emas Antam di Syifa Gold.
        </Heading>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-[1.25rem] border border-stone-200 bg-white px-6 py-5 shadow-sm">
              <summary className="cursor-pointer list-none text-lg font-semibold text-stone-900">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}