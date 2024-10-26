import { Badge } from "./badge";
import * as motion from "framer-motion/client";

export function Metrics() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ staggerChildren: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col justify-center items-center my-16 space-y-5 py-16"
    >
      <Badge label="MATRICS" />

      <p className="font-secondary-font text-3xl text-center font-medium">
        Numbers speaking for themselves
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-between items-center gap-28 xl:divide-x-2">
        <div className="text-center space-y-4 p-5 flex items-center flex-col justify-center">
          <p className="font-primary-font text-7xl text-[#573CFF]">75%</p>
          <p className="font-primary-font text-xl text-slate-600">
            Candidate match rate
          </p>
        </div>

        <div className="text-center space-y-4 p-5 flex items-center flex-col justify-center">
          <p className="font-primary-font text-7xl text-[#573CFF]">4000+</p>
          <p className="font-primary-font text-xl text-slate-600">
            Candidate match rate
          </p>
        </div>

        <div className="text-center space-y-4 p-5 flex items-center flex-col justify-center">
          <p className="font-primary-font text-7xl text-[#573CFF]">50+</p>
          <p className="font-primary-font text-xl text-slate-600">
            Candidate match rate
          </p>
        </div>
      </div>
    </motion.div>
  );
}
