import { CTA } from "@/components/cta";
import FeatureHero from "@/components/feature/feature-hero";
import { Features } from "@/components/features";
import { PowefulFeature } from "@/components/powerfullFeatues";

export default function FeaturePage() {
  return (
    <div className="px-5 md:px-10 xl:px-44">
      <FeatureHero />
      <Features />
      <PowefulFeature />
      <CTA
        title="Make a lasting impression with Hirevision"
        description="Discover why hiring managers prefer Hirevision over the competition and what makes it the easiest, most powerful video interviewing platform on the marke"
      />
    </div>
  );
}
