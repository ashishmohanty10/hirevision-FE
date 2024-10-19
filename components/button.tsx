import * as motion from "framer-motion/client";
import Arrow from "@/public/arrow.svg";
import Arrow2 from "@/public/asset 37.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
interface ButtonProps {
  text: string;
  active: boolean;
  className?: string;
  img: boolean;
}

export function Button({ active, text, className, img }: ButtonProps) {
  return (
    <motion.div
      initial={{ paddingRight: 24 }}
      whileHover={{ paddingRight: 30 }}
      transition={{ ease: "linear", duration: 0.3 }}
      className={cn(
        `${className} flex items-center font-primary-font rounded-lg py-3 px-4 w-fit group ${
          active
            ? "bg-textPrimary  text-white gap-2"
            : "text-center text-textPrimary border-2 border-textPrimary hover:bg-textPrimary hover:text-white"
        }`
      )}
    >
      <p className="mr-2">{text}</p>

      {img ? (
        <div>
          <Image
            src={Arrow2}
            alt="Arrow blue"
            className="size-6 group-hover:hidden"
          />
          <Image
            src={Arrow}
            alt="Arrow"
            className="size-6 hidden group-hover:block"
          />
        </div>
      ) : null}
    </motion.div>
  );
}
