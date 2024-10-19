import Image from "next/image";
import { cn } from "@/lib/utils";
import Arrow from "@/public/arrow.svg";
import Arrow2 from "@/public/asset 37.svg";
import * as motion from "framer-motion/client";

interface CTAProps {
  title: string;
  description: string;
}

export function CTA({ title, description }: CTAProps) {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "linear", duration: 0.5, delay: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-xl px-20 py-16 flex items-center justify-between my-6"
    >
      <div className="space-y-5">
        <p className="font-secondary-font font-semibold text-white text-5xl w-[600px] leading-tight">
          {title}
        </p>

        <p className="text-white font-primary-font font-medium text-lg w-[640px]">
          {description}
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
