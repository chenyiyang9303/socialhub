import { CTA } from "@/components/cta";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Logocloud } from "@/components/logocloud"; 
import { Faq } from "@/components/faq";
import { Testimonials } from "@/components/testimonials";
import { Stats } from "@/components/statssections";
import { Features2 } from "@/components/features2";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Features />
      <Stats />
      <Logocloud />
      <Pricing />
      <Testimonials />
      <Features2 />
      <Faq />
      <CTA />
    </main>
  );
}
