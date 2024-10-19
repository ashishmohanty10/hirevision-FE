import { powerfulFeatures } from "@/constants/constants";
import { Badge } from "./badge";
import * as motion from "framer-motion/client";
import Image from "next/image";

export function PowefulFeature() {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "linear", duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center py-5 space-y-5"
    >
      <Badge label="included" />

      <p className="text-center font-secondary-font font-medium text-6xl w-[750px] tracking-tight">
        Powerful features tailored to your needs
      </p>

      <p className="text-center text-lg font-normal text-slate-500">
        Gain valuable data-driven insights into talent markets worldwide.
      </p>

      <div className="grid grid-cols-3 py-4 gap-8">
        {powerfulFeatures.map((items) => (
          <div key={items.id} className="flex flex-col items-center space-y-5">
            <div className="bg-textPrimary rounded-full p-4">
              <Image
                src={items.icon}
                alt="powerful feature"
                className="size-12"
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
      </div>
    </motion.div>
  );
}
