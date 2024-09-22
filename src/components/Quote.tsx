import { FaQuoteLeft } from "react-icons/fa";
import { WobbleCard } from "./ui/WobbleCard";
const Quote = () => {
  return (
    <div className="bg-black   text-white flex flex-col items-center px-24 p-10">
      <h1 className="text-3xl font-bold">Quote for the day</h1>
      <WobbleCard containerClassName="border  shadow-xl border-[rgba(255,255,255,0.30)] bg-[rgba(97,97,97,0.20)] rounded-xl mt-8 max-w-xl">
        <FaQuoteLeft size={20} className="text-gray-700/50" />
        <p className="mt-4 text-lg">
          Our universe firstly exists in our minds, then in reality
        </p>
      </WobbleCard>
    </div>
  );
};

export default Quote;
