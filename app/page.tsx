import { ComapanyMarquee } from "@/components/companies";
import EasyToImplement from "@/components/EasyImplementation";
import { Features } from "@/components/features";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="mx-44">
      <Hero />
      <ComapanyMarquee />
      <EasyToImplement />
      <Features />
    </div>
  );
}
