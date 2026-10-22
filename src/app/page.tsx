import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { BrandPillars } from "@/components/BrandPillars";
import { Features } from "@/components/Features";
import { Products } from "@/components/Products";
import { Specs } from "@/components/Specs";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BrandPillars />
        <Features />
        <Products />
        <Specs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
