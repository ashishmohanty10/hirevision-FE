"use client";

import React from "react";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { heroImg } from "@/constants/constants";

export function HeroImg() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.div
        variants={itemVariants}
        className="px-10 flex items-center py-16 gap-10  transition-transform ease-in-out overflow-x-auto scrollbar-hide"
      >
        {heroImg.map((items) => (
          <Image
            key={items.id}
            alt="hero images"
            src={items.img}
            className="w-[200px] md:w-[300px]"
          />
        ))}
      </motion.div>
    </>
  );
}
