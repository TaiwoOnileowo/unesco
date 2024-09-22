import { executives } from "../lib/data";
import linkedin from "../assets/linkedin.svg";
const Executives = () => {
  return (
    <div className="py-20 flex flex-col items-center">
      <h1 className="text-3xl font-bold">Meet our Driven Executives</h1>
      <p className="max-w-md mt-4 text-gray-700 text-center">
        Our team is made up of highly motivated individuals who are dedicated to
        making a difference in the world.
      </p>
      <div className="flex gap-4 items-center mt-8">
        {" "}
        {executives.map((executive, i) => (
          <div
            key={i}
            className="flex group relative h-fit w-fit items-center justify-center "
          >
            <img
              src={executive.image}
              alt={executive.name}
              className="w-48 h-48 "
            />
            <div className="absolute bottom-2 left-[50%] translate-x-[-50%] bg-white px-2 p-1 w-[90%] rounded-sm">
              <h2 className="font-sfproBold text-base">{executive.name}</h2>
              <p className="text-sm text-gray-700">{executive.position}</p>
            </div>
            <a href="https://www.linkedin.com/" className="absolute group-hover:block hidden top-2 right-2 ">
              <img src={linkedin} alt="linkedin"className="w-5 h-5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Executives;
