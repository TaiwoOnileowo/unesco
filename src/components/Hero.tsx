import { FaArrowRight } from "react-icons/fa6";
import HeroBottom from "./HeroBottom";
import slash from "../assets/slash.svg";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="md:min-h-screen w-full  bg-black pb-16  bg-grid-white/[0.2]  relative flex flex-col items-center pt-32">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="mt-16 relative h-fit z-[50] flex items-center justify-center flex-col">
        <div className="relative w-fit">
          <TextGenerateEffect
            className="text-white font-sfproBold text-3xl lg:text-5xl max-lg:text-center"
            words={"Where young minds thrive, and problems meet solutions."}
          />
          <motion.img
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            src={slash}
            alt="Slash"
            className="absolute bottom-0 -right-10 max-lg:hidden"
          />
        </div>

        <motion.button
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 2, duration: 0.5 }}
          className="rounded-full group flex gap-2 items-center mt-10 bg-[rgba(210,210,210,0.2)] hover:bg-[rgba(210,210,210,0.25)] transition-all duration-300 ease-in text-white p-3 px-5 bg-filter"
        >
          Learn more
          <span className="p-1.5 group-hover:pl-4 transition-all duration-300 ease-linear  text-sm rounded-full flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,#4BCCFF,#008FC7)] bg-blue-500 text-black">
            <FaArrowRight />
          </span>
        </motion.button>
        <motion.img
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 0.3, filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
          src={slash}
          alt="Slash"
          className="absolute -bottom-2.5 opacity-30 -left-10"
        />
        <motion.img
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 0.3, filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
          src={slash}
          alt="Slash"
          className="absolute -bottom-2 opacity-30 right-20 rotate-90"
        />
      </div>
      <HeroBottom />
    </div>
  );
};

export default Hero;
