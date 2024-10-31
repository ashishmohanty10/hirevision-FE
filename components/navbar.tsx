"use client";

import Image from "next/image";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as motion from "framer-motion/client";
import Arrow from "@/public/arrow.svg";
import Arrow2 from "@/public/asset 37.svg";
import { navLinks } from "@/constants/constants";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const pathName = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <motion.nav
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "backIn", duration: 0.6 }}
      className="flex justify-between items-center bg-transparent backdrop-blur-md px-5 md:px-10 xl:px-20 py-4 sticky top-0 left-0 z-50 hover:bg-white bg-opacity-10 transition-all group"
    >
      <Link href={"/"}>
        <Image src={Logo} alt="Logo" />
      </Link>

      <div className="hidden xl:flex items-center gap-8 ">
        {navLinks.map((items) => (
          <Link
            href={items.href}
            key={items.id}
            className={`font-primary-font font-semibold text-base hover:!text-textPrimary transition group-hover:text-headingText ${
              pathName === items.href ? "text-textPrimary" : "text-black/60"
            }`}
          >
            {items.name}
          </Link>
        ))}
      </div>

      <div>
        <motion.button
          initial={{ paddingRight: 24 }}
          whileHover={{ paddingRight: 30 }}
          transition={{ ease: "linear", duration: 0.3 }}
          className={cn(
            `py-3 px-4 xl:flex items-cneter gap-2 font-primary-font text-white  border border-white rounded-lg group-hover:border-textPrimary group-hover:text-textPrimary hidden`
          )}
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
        </motion.button>
      </div>

      {/* mobile nav */}

      <div className="xl:hidden">
        <div onClick={handleSidebar} className="transition-all">
          {showSidebar ? <X className="relative z-50" /> : <Menu />}
        </div>

        {showSidebar && (
          <div className="transition-all flex flex-col absolute top-0 right-0 px-10 h-screen justify-center gap-5 bg-white rounded-xl  z-40 w-1/2 shadow-md  ">
            {navLinks.map((items) => (
              <Link href={items.href} key={items.id} className="text-xl">
                {items.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
}
