"use client";

import Image from "next/image";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as motion from "framer-motion/client";
import Arrow from "@/public/arrow.svg";
import Arrow2 from "@/public/asset 37.svg";
import { navLinks } from "@/constants/constants";

export function Navbar() {
  const pathName = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "backIn", duration: 0.3 }}
      className="flex justify-between items-center bg-transparent backdrop-blur-md px-20 py-4 sticky top-0 left-0 z-50 hover:bg-white bg-opacity-10 transition-all group"
    >
      <Link href={"/"}>
        <Image src={Logo} alt="Logo" />
      </Link>

      <div className="flex items-center gap-8">
        {navLinks.map((items) => (
          <Link
            href={items.href}
            key={items.id}
            className={`font-primary-font font-semibold text-base hover:!text-textPrimary transition group-hover:text-headingText ${
              pathName === items.href ? "text-textPrimary" : "text-slate-300/85"
            } `}
          >
            {items.name}
          </Link>
        ))}
      </div>

      <div>
        <motion.div
          initial={{ paddingRight: 24 }}
          whileHover={{ paddingRight: 30 }}
          transition={{ ease: "linear", duration: 0.3 }}
          className={`font-primary-font px-6 py-3 rounded-md text-white font-base font-semibold flex items-center hover:bg-btnPrimary hover:!text-white transition  border hover:border-btnPrimary border-white group-hover:border-textPrimary group-hover:text-textPrimary`}
        >
          <p className="mr-2">Signin</p>

          <Image
            src={Arrow}
            alt="Arrow"
            className="size-6 group-hover:hidden"
          />
          <Image
            src={Arrow2}
            alt="Arrow"
            className="size-6 hidden group-hover:block"
          />
        </motion.div>
      </div>
    </motion.nav>
  );
}
