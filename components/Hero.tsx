import Image from "next/image";
import React from "react";
import ArrowRight from "@/public/asset 44.svg";
import { customer } from "@/constants/constants";
import * as motion from "framer-motion/client";
import { Button } from "./button";
import { HeroImg } from "./heroImg";

const Hero = () => {
  return (
    <motion.div
      className="w-full min-h-screen"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ staggerChildren: 0.3, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center  pt-28 ">
        <div className="bg-[#D8D5FA] py-2 px-4 w-fit rounded-3xl flex items-center gap-3 text-sm font-primary-font font-medium mb-5">
          <div className="bg-[#EAF2FF] text-textPrimary rounded-2xl px-2 py-1">
            <span>New</span>
          </div>

          <div className="text-textPrimary flex items-center gap-1">
            Create teams in Organisation{" "}
            <Image src={ArrowRight} alt="arrow right" className="size-5" />
          </div>
        </div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "backIn", duration: 0.6 }}
          className="text-center text-3xl md:text-5xl xl:text-7xl font-medium font-secondary-font tracking-tight xl:w-[900px] mb-8 text-headingText leading-tight"
        >
          Boost your hiring process with AI solution
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "backIn", duration: 1 }}
          className="font-primary-font text-lg md:w-[600px] text-center text-slate-700 mb-6"
        >
          Hirevision is used by numerous businesses, institutions, and
          recruiters to significantly enhance their screening and recruitment
          procedures.
        </motion.p>

        <motion.div
          initial={{ y: "70%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "circIn", duration: 0.5 }}
          className="flex items-center"
        >
          {customer.map((img) => (
            <motion.div initial={{ y: 0 }} whileHover={{ y: -5 }} key={img.id}>
              <Image
                src={img.image}
                alt="trusted customer image"
                className="size-9 rounded-full object-center border border-white p-[-30px]"
              />
            </motion.div>
          ))}
          <p className="text-sm text-textSecondary ml-8">
            Trusted already by 1.2k+
          </p>
        </motion.div>

        <motion.div
          initial={{ y: "70%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "backIn", duration: 0.6 }}
          className="flex gap-4 mt-8"
        >
          <Button
            img={false}
            active={false}
            text="Learn More"
            className="border-textPrimary text-textPrimary text-sm md:text-base"
          />
          <Button
            img={true}
            active={true}
            text="Request Demo"
            className="border-textPrimary text-textPrimary text-sm md:text-base"
          />
        </motion.div>
      </div>

      <HeroImg />
    </motion.div>
  );
};

export default Hero;
