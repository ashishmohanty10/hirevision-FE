"use client";

import React from "react";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { heroImg } from "@/constants/constants";

const marqueeVarient = {
  animate: {
    x: [-3000, 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

export function HeroImg() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ staggerChildren: 0.6 }}
      className=" flex items-center w-full overflow-hidden my-8 px-10 py-3"
      viewport={{ once: true }}
    >
      <motion.div
        variants={marqueeVarient}
        animate="animate"
        className="px-10 flex justify-center items-center py-16 gap-10  transition-transform ease-in-out "
      >
        {[...Array(7)].map((_, idx) =>
          heroImg.map((items) => (
            <Image
              key={`${items.id}-${idx}`}
              alt="hero images"
              src={items.img}
              className="w-[200px] md:w-[300px]"
            />
          ))
        )}
      </motion.div>
    </motion.div>
  );
}
