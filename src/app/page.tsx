import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import Hero from "@/features/home/components/hero";
import WhyChooseUs from "@/features/home/components/why-choose-us";
import ProductSection from "@/features/home/components/product-section";
import CTASection from "@/features/home/components/cta-section";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <WhyChooseUs />
        <ProductSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}