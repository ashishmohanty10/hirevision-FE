import Image from "next/image";
import { cn } from "@/lib/utils";
import Arrow from "@/public/arrow.svg";
import Arrow2 from "@/public/asset 37.svg";
import * as motion from "framer-motion/client";

export function CTA() {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "linear", duration: 1 }}
      className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-xl px-20 py-16 flex items-center justify-between my-6"
    >
      <div className="space-y-5">
        <p className="font-secondary-font font-semibold text-white text-5xl w-[600px] leading-tight">
          Make a lasting impression with Hirevision
        </p>

        <p className="text-white font-primary-font font-medium text-lg w-[640px]">
          Discover why hiring managers prefer Hirevision over the competition
          and what makes it the easiest, most powerful video interviewing
          platform on the marke
        </p>
      </div>

      <motion.button
        initial={{ paddingRight: 24 }}
        whileHover={{ paddingRight: 30 }}
        transition={{ ease: "linear", duration: 0.3 }}
        className={cn(
          `py-3 px-4 flex items-cneter gap-2 font-primary-font text-white  border border-white rounded-lg group-hover:border-textPrimary group-hover:text-textPrimary  `
        )}
      >
        <p className="mr-2">Signin</p>

        <Image src={Arrow} alt="Arrow" className="size-6 group-hover:hidden" />
        <Image
          src={Arrow2}
          alt="Arrow"
          className="size-6 hidden group-hover:block"
        />
      </motion.button>
    </motion.div>
  );
}
