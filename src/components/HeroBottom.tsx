import sdgwheel from "../assets/sdgwheel1.png";
import { sdgs } from "../lib/data";
import RecentEvents from "./RecentEvents";
import { motion } from "framer-motion";
const HeroBottom = () => {
  return (
    <div className="max-w-[1200px] mt-24 border border-[rgba(255,255,255,0.30)] bg-[rgba(97,97,97,0.20)] bg-filter bg-blur rounded-3xl flex flex-col items-center justify-center p-8">
      <div className="rounded-full w-fit shadow-sm shadow-black/50">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={sdgwheel}
          alt="SDG wheel"
          className="w-20 h-20"
        />
      </div>
      <h2 className=" text-white text-4xl my-3">
        Sustainable Development Goals
      </h2>
      <div className="flex gap-2.5 items-center mt-4">
        {sdgs.map((sdg, index) => (
          <div className="w-16 h-16 aspect-square" key={index}>
            <img
              key={index}
              src={sdg}
              alt={`SDG ${index + 1}`}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
      <RecentEvents />
    </div>
  );
};

export default HeroBottom;
