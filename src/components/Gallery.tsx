import { LayoutGrid } from "./ui/LayoutGrid";
import { gallery } from "../lib/data";
const Gallery = () => {
  return (
    <div className="h-screen py-20 w-full flex flex-col bg-gray-100 items-center">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <p
        className="text-center mt-4 text-gray-700 max-w-lg   "
      >
        A collection of pictures from our past events and activities
      </p>
      <LayoutGrid cards={gallery} />
    </div>
  );
};

export default Gallery;
