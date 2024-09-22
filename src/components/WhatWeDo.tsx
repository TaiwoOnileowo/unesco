import { FaArrowRight } from "react-icons/fa6";
import { whatWeDo } from "../lib/data";
import FlipLine from "./FlipLine";
import { useState } from "react";
import { AnimatePresence, easeIn, motion, useInView } from "framer-motion";
import { useRef } from "react";
const WhatWeDo = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const handleClick = (index: number) => {
    if (clickedIndex === index) {
      setClickedIndex(null);
    } else {
      setClickedIndex(index);
    }
  };

  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true });
  return (
    <div className="bg-white p-16 px-24">
      <h1 className="text-[#353535] font-sfproBold text-4xl">What We Do</h1>

      {isInView ? (
        <p
          className="max-w-md mt-4  text-lg text-[rgba(53,53,53,0.60)]"
          ref={textRef}
        >
          <FlipLine>
            {`The UNESCO youth club is a community in Covenant\n University that helps young mings thrive and provide\n solutions to world problems. By providing them with a safe space to develop and share ideas amongst like minds, the\n UNESCO youth club is designed to aid growth on all levels.`}
          </FlipLine>
        </p>
      ) : (
        <p
          className="max-w-md mt-4  text-lg text-[rgba(53,53,53,0.60)]"
          ref={textRef}
        >
          The UNESCO youth club is a community in Covenant{"\n"} University that
          helps young mings thrive and provide{"\n"} solutions to world
          problems. By providing them with a safe space{"\n"} to develop and
          share ideas amongst like minds, the{"\n"} UNESCO youth club is
          designed to aid growth on all levels.
        </p>
      )}
      <div className="mt-24">
        {whatWeDo.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: easeIn,
            }}
            viewport={{ once: true }}
            key={index}
            className="flex  gap-16 "
          >
            <div className="w-1/3">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div layout className="w-1/2" transition={{ duration: 0.3 }}>
              <h1
                className="text-[#353535] text-4xl cursor-pointer group hover:text-[#413b3b]"
                onClick={() => handleClick(index)}
              >
                {item.title}{" "}
                <FaArrowRight
                  className={`inline ml-1 transition-all group-hover:ml-3 duration-300 ease-linear ${
                    clickedIndex === index ? "rotate-45" : ""
                  }`}
                />
              </h1>
              <AnimatePresence mode="wait">
                {clickedIndex === index && (
                  <AnimatePresence mode="wait">
                    <p className="max-w-md mt-4 text-xl text-[rgba(53,53,53,0.60)]">
                      <FlipLine>{item.description}</FlipLine>
                    </p>
                  </AnimatePresence>
                )}
              </AnimatePresence>
              <hr className="border-t border-black w-full mt-3" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
