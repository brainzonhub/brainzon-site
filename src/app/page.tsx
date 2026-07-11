import { Hero } from "@/components/sections/Hero";
import { ProductEcosystem } from "@/components/sections/ProductEcosystem";
import { ERPShowcase } from "@/components/sections/ERPShowcase";
import { CRMShowcase } from "@/components/sections/CRMShowcase";
import { AIShowcase } from "@/components/sections/AIShowcase";
import { ConnectShowcase } from "@/components/sections/ConnectShowcase";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { DemoCTA } from "@/components/sections/DemoCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductEcosystem />
      <ERPShowcase />
      <CRMShowcase />
      <AIShowcase />
      <ConnectShowcase />
      <SolutionsGrid />
      <WhyChoose />
      <DemoCTA />
    </>
  );
}

