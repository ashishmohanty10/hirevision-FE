import { Company, Resources } from "@/constants/constants";
import FooterLogo from "@/public/asset 23.svg";
import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client";

export default function Footer() {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ staggerChildren: 0.6 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 justify-between items-start gap-10 px-10 py-16 space-y-5"
    >
      <div className="space-y-5">
        <Link href={"/"}>
          <Image src={FooterLogo} alt="Footer Logo" />
        </Link>
        <p className="xl:w-[200px] text-lg text-slate-500">
          Significantly enhance your screening and recruitment procedures.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 justify-center items-start">
        <div className="flex flex-col gap-1 font-medium font-primary-font mb-5 xl:mb-0">
          <p className="text-lg text-slate-800 ">Resources</p>
          {Resources.map((items) => (
            <Link
              key={items.id}
              href={items.href}
              className="text-base text-slate-500 hover:text-textPrimary transition"
            >
              {items.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-1 font-medium font-primary-font">
          <p className="text-lg text-slate-800 ">Company</p>
          {Company.map((items) => (
            <Link
              key={items.id}
              href={items.href}
              className="text-base text-slate-500  hover:text-textPrimary transition"
            >
              {items.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
