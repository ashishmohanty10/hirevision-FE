import * as motion from "framer-motion/client";

export default function FeatureHero() {
  return (
    <>
      <motion.div
        initial={{ y: "70%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ staggerChildren: 0.3, duration: 0.5 }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "backIn", duration: 0.6 }}
          className="flex flex-col items-center justify-center py-32"
        >
          <p className="text-center text-3xl md:text-5xl xl:text-7xl font-medium font-secondary-font tracking-tighter xl:w-[900px] mb-8 text-headingText leading-tight">
            AI-Powered features from the future.
          </p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "backIn", duration: 1 }}
            className="font-primary-font text-lg md:w-[600px] text-center text-slate-700 mb-6"
          >
            Hirevision is utilized by numerous businesses, institutions, and
            recruiters to significantly enhance their screening and recruitment
            procedures.
          </motion.p>
        </motion.div>
      </motion.div>
    </>
  );
}
