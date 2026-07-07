import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";

const faqs = [
  {
    question: "Apakah emas yang dijual asli?",
    answer: "Ya. Semua produk Syifa Gold berasal dari sumber resmi dan dijamin keasliannya.",
  },
  {
    question: "Apakah ada opsi pembelian dengan cicilan?",
    answer: "Kami dapat membantu menyesuaikan pilihan berdasarkan kebutuhan prioritas Anda.",
  },
  {
    question: "Bagaimana proses pengiriman?",
    answer: "Pengiriman dilakukan dengan penanganan yang hati-hati dan informasi yang jelas sepanjang proses.",
  },
];

export default function FAQ() {
  return (
    <Section id="faq" className="bg-stone-50/70">
      <Container className="max-w-4xl">
        <Heading eyebrow="FAQ" className="text-center">
          Pertanyaan yang sering diajukan pelanggan.
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