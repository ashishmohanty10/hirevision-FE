import Image from "next/image";
import { Badge } from "./badge";
import Feature2 from "@/public/asset 16.jpeg";
import Feature3 from "@/public/asset 17.jpeg";
import { Button } from "./button";
import * as motion from "framer-motion/client";

export function Features() {
  return (
    <div className="flex flex-col gap-y-10">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ staggerChildren: 0.6 }}
        viewport={{ once: true }}
        className=" xl:flex items-center gap-20 py-5  "
      >
        <div className="flex flex-col items-center space-y-5 mb-8 xl:mb-0 text-center  xl:text-left">
          <Badge label="FEATURES" />

          <p className="font-secondary-font font-medium text-5xl ">
            Automated Candidate <br /> Ranking
          </p>

          <p className="text-lg font-normal font-secondary-font text-slate-500 pr-5">
            Let AI analyze and rank applicants based on qualifications,
            experience, and skills, ensuring you focus on the most promising
            candidates first.
          </p>

          <Button active={false} img={true} text="Request Demo" />
        </div>

        <div>
          <Image src={Feature2} alt="feature 2" />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "linear", duration: 0.5 }}
        viewport={{ once: true }}
        className="xl:flex items-center gap-20 py-5  "
      >
        <div>
          <Image src={Feature3} alt="feature 3" />
        </div>
        <div className="flex flex-col items-center space-y-5 mb-8 xl:mb-0 text-center  xl:text-left">
          <Badge label="FEATURES" />

          <p className="font-secondary-font font-medium text-5xl ">
            Real-Time Applicant <br /> Analytics
          </p>

          <p className="text-lg font-normal font-secondary-font text-slate-500 pr-5">
            Let AI analyze and rank applicants based on qualifications,
            experience, and skills, ensuring you focus on the most promising
            candidates first.
          </p>

          <Button active={false} img={true} text="Request Demo" />
        </div>
      </motion.div>
    </div>
  );
}
