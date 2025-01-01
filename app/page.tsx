import { CompanyMarquee } from "@/components/companies";
import { CTA } from "@/components/cta";
import EasyToImplement from "@/components/EasyImplementation";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import Hero from "@/components/Hero";
import { Metrics } from "@/components/metrics";
import { PowerfulFeature } from "@/components/powerfulFeature";

export default function Home() {
  return (
    <div className="px-5 md:px-10 xl:px-44">
      <Hero />
      <CompanyMarquee />
      <EasyToImplement />
      <Features />
      <PowerfulFeature />
      <CTA
        title="Make a lasting impression with Hirevision"
        description="Discover why hiring managers prefer Hirevision over the competition
          and what makes it the easiest, most powerful video interviewing
          platform on the marke"
      />
      <Metrics />

      <FAQ />
      <CTA
        title="Make a lasting impression with Hirevision"
        description="Discover why hiring managers prefer Hirevision over the competition
          and what makes it the easiest, most powerful video interviewing
          platform on the marke"
      />
    </div>
  );
}
