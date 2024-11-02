"use client";

import { faq } from "@/constants/constants";
import { Badge } from "./badge";
import * as motion from "framer-motion/client";
import { useState } from "react";
import Image from "next/image";
import FAQArrow from "@/public/asset 45.svg";

export function FAQ() {
  return (
    <motion.div
      initial={{ y: 70, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ staggerChildren: 0.6, duration: 0.3 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center space-y-10 py-4"
    >
      <Badge label="FAQ" />

      <p className="text-center font-secondary-font font-medium text-6xl tracking-tight">
        We’ve got you covered
      </p>

      <div className="bg-slate-200 p-5 rounded-xl">
        {faq.map((items) => (
          <Accordion
            key={items.question}
            questions={items.question}
            answers={items.answer}
          />
        ))}
      </div>
    </motion.div>
  );
}

interface AccordionProps {
  questions: string;
  answers: string;
}

function Accordion({ questions, answers }: AccordionProps) {
  const [isAccordion, setIsAccordion] = useState<boolean>(false);

  const handleAccordion = () => {
    setIsAccordion(!isAccordion);
  };
  return (
    <div className="flex flex-col gap-4 py-4 xl:w-[800px]">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleAccordion}
      >
        <span className="text-lg font-semibold font-primary-font">
          {questions}
        </span>
        <div className="flex items-center justify-center">
          {isAccordion ? (
            <Image
              src={FAQArrow}
              alt="arrow down"
              className="size-4 rotate-180"
            />
          ) : (
            <Image src={FAQArrow} alt="arrow down" className="size-4" />
          )}
        </div>
      </div>

      <div>
        {isAccordion && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.6 }}
            className="w-[600px] font-primary-font"
          >
            {" "}
            {answers}
          </motion.p>
        )}
      </div>
    </div>
  );
}
