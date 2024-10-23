import { powerfulFeatures } from "@/constants/constants";
import { Badge } from "./badge";
import * as motion from "framer-motion/client";
import Image from "next/image";

export function PowefulFeature() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ staggerChildren: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center py-5 space-y-5 my-9"
    >
      <Badge label="included" />

      <p className="text-center font-secondary-font font-medium  text-2xl md:text-5xl xl:text-6xl xl:w-[750px] tracking-tight">
        Powerful features tailored to your needs
      </p>

      <p className="text-center text-lg font-normal text-slate-500">
        Gain valuable data-driven insights into talent markets worldwide.
      </p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ staggerChildren: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-4 gap-8"
      >
        {powerfulFeatures.map((items) => (
          <div key={items.id} className="flex flex-col items-center space-y-5">
            <div className="bg-textPrimary rounded-full p-2">
              <Image
                src={items.icon}
                alt="powerful feature"
                className="size-8"
              />
            </div>

            <div className="text-center space-y-4">
              <p className="font-primary-font font-semibold text-xl">
                {items.title}
              </p>

              <p className="font-primary-font">{items.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
