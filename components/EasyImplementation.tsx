import { Badge } from "./badge";
import * as motion from "framer-motion/client";
export default function EasyToImplement() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ staggerChildren: 0.6 }}
      viewport={{ once: true }}
      className="flex items-center justify-center flex-col py-5 space-y-5 my-5   "
    >
      <Badge label="HOW IT WORKS" />

      <p className="text-center font-secondary-font font-medium text-2xl md:text-5xl xl:text-6xl xl:w-[750px] tracking-tight">
        Easy implementation in three easy steps
      </p>

      <p className="xl:w-[600px] text-center text-lg font-normal text-slate-500">
        Cutting-edge, user-friendly AI tool and growth analytics designed to
        boost user conversion, engagement, and retention.
      </p>
    </motion.div>
  );
}
