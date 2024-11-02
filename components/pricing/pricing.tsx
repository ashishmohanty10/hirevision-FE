import { Plan } from "@/constants/constants";
import { CheckCircle2 } from "lucide-react";
import * as motion from "framer-motion/client";
import Arrow2 from "@/public/asset 37.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ staggerChildren: 0.3, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "linear", duration: 0.5 }}
        viewport={{ once: true }}
        className="grid xl:grid-cols-3 gap-5 font-primary-font"
      >
        {Plan.map((items, index) => (
          <div
            key={index}
            className={`p-8 border rounded-lg space-y-2 ${
              index === 1 && "bg-[#573CFF]"
            }`}
          >
            <div
              className={`px-4 py-1 w-fit rounded-full text-base font-semibold ${
                index === 1
                  ? "bg-[#FBF7B8] text-textPrimary"
                  : "text-white bg-[#573CFF]"
              }`}
            >
              {items.name}
            </div>

            <div
              className={`flex items-baseline  ${index === 1 && "text-white"}`}
            >
              <p className="text-5xl font-medium ">$29</p>
              <span>/mo</span>
            </div>

            <div>
              <p className="text-base mb-2 text-slate-400 font-normal">
                What&apos;s included
              </p>
              <div className="flex flex-col">
                {items.features.map((itemss, idx) => (
                  <div key={idx} className="flex gap-2 mb-2 items-center">
                    <CheckCircle2
                      className={`${
                        index === 1 ? "text-white" : "text-[#573CFF]"
                      }`}
                    />
                    <p
                      className={`${
                        index === 1 ? "text-white" : "text-textPrimary"
                      }`}
                    >
                      {itemss}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <motion.button
              initial={{ paddingRight: 24 }}
              whileHover={{ paddingRight: 30 }}
              transition={{ ease: "linear", duration: 0.3 }}
              className={cn(
                `py-3 px-4 flex w-full justify-center font-medium items-center gap-2 font-primary-font border rounded-lg ${
                  index === 1 && "text-[#573CFF] bg-white border border-white"
                }`
              )}
            >
              <p className="mr-2">Signin</p>

              <Image
                src={Arrow2}
                alt="Arrow"
                className="size-6  group-hover:block"
              />
            </motion.button>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
