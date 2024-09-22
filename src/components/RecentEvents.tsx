import { recentEvents } from "../lib/data";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
const RecentEvents = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full  h-fit mt-10"
    >
      <CarouselContent className="flex gap-6 w-full">
        {recentEvents.map((event, index) => (
          <CarouselItem
            key={index}
            className={`md:basis-1/2 w-full lg:basis-1/3 rounded-lg bg-blend-overlay bg-[rgba(97,97,97,0.20)] shadow-md ${
              index === 0 ? "ml-4" : ""
            }`}
          >
            <div className=" h-[200px]  relative rounded-t-lg  w-full  group overflow-hidden ">
              <div className="bg-black/20 absolute z-10 inset-0 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 "></div>
              <img
                src={event.image}
                alt={event.heading}
                className="group-hover:scale-105 transition-all ease-in-out duration-300 w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-3">
              <h3 className="text-white text-xl font-bold font-sfproBold text-center ">
                {event.heading}
              </h3>
              <p className="text-[rgba(253,254,254,0.60)] mt-4">{event.text}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default RecentEvents;
