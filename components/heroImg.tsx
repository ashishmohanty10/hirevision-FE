"use client";

import React from "react";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { heroImg } from "@/constants/constants";

export function HeroImg() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ staggerChildren: 0.6 }}
      className=" relative flex items-center w-full overflow-hidden px-10 py-12"
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-x-5 w-[100%] animate-infinite-scroll [--animation-delay:10s]">
        {[...heroImg, ...heroImg, ...heroImg].map((items, idx) => (
          <Image
            key={idx}
            alt="hero images"
            src={items.img}
            width={200}
            height={200}
            className="md:w-[300px]"
          />
        ))}
      </div>
    </motion.div>
  );
}
