import { ComapanyMarquee } from "@/components/companies";
import { CTA } from "@/components/cta";
import EasyToImplement from "@/components/EasyImplementation";
import { Features } from "@/components/features";
import Hero from "@/components/Hero";
import { PowefulFeature } from "@/components/powerfullFeatues";

export default function Home() {
  return (
    <div className="mx-44">
      <Hero />
      <ComapanyMarquee />
      <EasyToImplement />
      <Features />
      <PowefulFeature />
      <CTA />
    </div>
  );
}
