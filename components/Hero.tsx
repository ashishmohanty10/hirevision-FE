import Image from "next/image";
import React from "react";
import ArrowRight from "@/public/asset 44.svg";
import { customer } from "@/constants/constants";
import * as motion from "framer-motion/client";
import { Button } from "./button";
import { HeroImg } from "./heroImg";

const Hero = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="bg-textPrimary w-[200px]md:w-[400px] xl:w-[700px] h-[400px] absolute -top-48 xl:right-0 -z-10 blur-3xl rounded-full overflow-clip"></div>
      <div className="bg-green-300  w-[300px]  md:w-[400px] h-[300px] absolute -top-48 left-10 xl:left-44 -z-10 blur-3xl rounded-full overflow-clip"></div>
      <div className="bg-textPrimary w-[100px] md:w-[400px] h-[300px] absolute -top-48 md:right-[100px] xl:right-[500px] -z-10 blur-3xl rounded-full overflow-clip"></div>
      <div className="bg-textPrimary w-[200px] md:w-[400px] h-[200px] absolute -top-48 md:right-[50px] xl:right-[600px] -z-10 blur-3xl rounded-full overflow-clip"></div>
      <div className="bg-yellow-300 w-[300px] md:w-[400px] h-[400px] absolute -top-48 xl:-left-12 -z-20  blur-3xl rounded-full"></div>

      <div className="flex flex-col items-center  pt-28 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "backIn", duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[#D8D5FA] py-2 px-4 w-fit rounded-3xl flex items-center gap-3 text-sm font-primary-font font-medium mb-5"
        >
          <div className="bg-[#EAF2FF] text-textPrimary rounded-2xl px-2 py-1">
            <span>New</span>
          </div>

          <div className="text-textPrimary flex items-center gap-1">
            Create teams in Organisation{" "}
            <Image src={ArrowRight} alt="arrow right" className="size-5" />
          </div>
        </motion.div>

        <motion.p
          initial={{ y: "70%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "backIn", duration: 0.5 }}
          className="text-center text-3xl md:text-5xl xl:text-7xl font-medium font-secondary-font tracking-tight xl:w-[900px] mb-8 text-headingText leading-tight"
        >
          Boost your hiring process with AI solution
        </motion.p>

        <motion.p
          initial={{ y: "70%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "backIn", duration: 0.5 }}
          className="font-primary-font text-lg md:w-[600px] text-center text-slate-700 mb-6"
        >
          Hirevision is used by numerous businesses, institutions, and
          recruiters to significantly enhance their screening and recruitment
          procedures.
        </motion.p>

        <motion.div
          initial={{ y: "70%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "backIn", duration: 0.5 }}
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
    </div>
  );
};

export default Hero;
