"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";

import { faq } from "@/constants/constants";
import { Badge } from "./badge";

interface FAQItem {
  question: string;
  answer: string;
}

function AccordionItem({ data }: { data: FAQItem }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className="mb-4 border border-brand/25 w-full p-2 rounded-2xl backdrop-blur-md cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center justify-between cursor-pointer">
        <p className={cn("text-md font-semibold", open && "mb-5")}>
          {data.question}
        </p>
        {open ? <Minus size={16} /> : <Plus size={16} />}
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pt-2 text-sm text-primary-text">{data.answer}</p>
      </motion.div>
    </div>
  );
}

export function FAQ() {
  return (
    <>
      <div className="py-16">
        <div className="mx-auto max-w-full text-center mb-10 flex flex-col items-center space-y-5">
          <Badge label="Frequently Asked Questions" />
          <h2 className="text-3xl md:text-6xl tracking-tighter sm:text-6xl font-semibold">
            Everything you need to know.
          </h2>
          <p className="text-md md:text-lg tracking-tight text-primary-text font-geist">
            Got questions? We’ve got answers. Here’s everything you need to know
            before getting started.
          </p>
        </div>

        <div className="flex items-center flex-col max-w-5xl mx-auto relative">
          {faq.map((data, idx) => (
            <AccordionItem key={idx} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}
