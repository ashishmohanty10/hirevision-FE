import * as motion from "framer-motion/client";
import Arrow from "@/public/arrow.svg";
import Image from "next/image";
interface ButtonProps {
  text: string;
  active: boolean;
  className?: string;
}

export function Button({ active, text, className }: ButtonProps) {
  return (
    <motion.div
      initial={{ paddingRight: 24 }}
      whileHover={{ paddingRight: 30 }}
      transition={{ ease: "linear", duration: 0.3 }}
      className={`font-primary-font px-6 py-3 rounded-md  font-base font-semibold flex items-center ${className} ${
        active === true
          ? "bg-btnPrimary text-white"
          : "hover:bg-btnPrimary transition border hover:border-btnPrimary border-white text-textPrimary hover:text-white"
      }`}
    >
      <p className="mr-2">{text}</p>

      {active ? <Image src={Arrow} alt="Arrow" className="size-6" /> : null}
    </motion.div>
  );
}
