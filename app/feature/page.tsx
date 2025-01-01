import { CTA } from "@/components/cta";
import FeatureHero from "@/components/feature/feature-hero";
import { Features } from "@/components/features";
import { PowerfulFeature } from "@/components/powerfulFeature";

export default function FeaturePage() {
  return (
    <div className="px-5 md:px-10 xl:px-44">
      <FeatureHero />
      <Features />
      <PowerfulFeature />
      <CTA
        title="Make a lasting impression with HireVision"
        description="Discover why hiring managers prefer HireVision over the competition and what makes it the easiest, most powerful video interviewing platform on the make"
      />
    </div>
  );
}
