import { marquee } from "@/constants/constants";
import * as motion from "framer-motion/client";
import Image from "next/image";

export function CompanyMarquee() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ staggerChildren: 0.6 }}
      className="xl:w-[1100px] mx-auto overflow-hidden my-8 px-10 py-3"
      viewport={{ once: true }}
    >
      <p className="font-primary-font text-xl font-normal text-slate-500 text-center mb-8 ">
        Already chosen by the world leaders
      </p>
      <motion.div className="px-10 flex items-center justify-center gap-24 w-[120rem] mx-auto animate-infinite-scroll [--animation-delay:50s]">
        {[...marquee, ...marquee, ...marquee].map((img, idx) => (
          <Image key={idx} src={img.img} alt="Marquee" className="w-[120px]" />
        ))}
      </motion.div>
    </motion.div>
  );
}
