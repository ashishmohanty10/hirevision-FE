import { marquee } from "@/constants/constants";
import * as motion from "framer-motion/client";
import Image from "next/image";

const marqueeVarient = {
  animate: {
    x: [0, -2000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

export function ComapanyMarquee() {
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
      <motion.div
        whileHover={{ x: 0 }}
        variants={marqueeVarient}
        animate="animate"
        className="px-10 flex items-center justify-center gap-24 w-[1000px] mx-auto"
      >
        {marquee.map((img) => (
          <Image
            key={img.id}
            src={img.img}
            alt="Marquee"
            className="w-[120px]"
          />
        ))}
        {marquee.map((img) => (
          <Image
            key={img.id}
            src={img.img}
            alt="Marquee"
            className="w-[120px]"
          />
        ))}
        {marquee.map((img) => (
          <Image
            key={img.id}
            src={img.img}
            alt="Marquee"
            className="w-[120px]"
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
