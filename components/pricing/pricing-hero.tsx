import { Badge } from "../badge";
import * as motion from "framer-motion/client";

export function PricingHero() {
  return (
    <motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "backIn", duration: 0.6 }}
        className="flex flex-col items-center justify-center py-32"
      >
        <Badge label="PRICING" />

        <p className="text-center text-3xl md:text-5xl xl:text-7xl font-medium font-secondary-font tracking-tighter xl:w-[900px] mb-8 text-headingText leading-tight">
          Pick a plan, start free.
        </p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "backIn", duration: 1 }}
          className="font-primary-font text-lg md:w-[600px] text-center text-slate-700 mb-6"
        >
          Choose your ideal plan. No obligation, cancel anytime.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
