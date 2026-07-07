import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import Hero from "@/features/home/components/hero";
import WhyChooseUs from "@/features/home/components/why-choose-us";
import ProductSection from "@/features/home/components/product-section";
import HowToBuy from "@/features/home/components/how-to-buy";
import FAQ from "@/features/home/components/faq";
import CTASection from "@/features/home/components/cta-section";

export default function Home() {
  return (
    <>
    <Navbar />

    <Hero />

    <WhyChooseUs />

    <ProductSection />

    <HowToBuy />

    <FAQ />

    <CTASection />

    <Footer />
    </>
  );
}