import logo from "/logo.svg?url";
import slash from "../assets/slash.svg";
import { navLinks } from "../lib/data";
import { motion } from "framer-motion";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="absolute top-0 py-4 px-2 md:p-8 xl:px-16 2xl:px-24 z-[50] w-full flex items-center justify-between">
      <div className="max-lg:w-full flex items-center z-[10] justify-between">
        <div className=" w-40 lg:w-52">
          <motion.img
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            src={logo}
            alt="Unesco Logo"
            className="  w-full"
          />
          <motion.img
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            src={slash}
            alt="Slash"
            className="mt-0.5"
          />
        </div>
        {isOpen ? (
          <IoMdClose
            className="text-white lg:hidden text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <IoIosMenu
            className="text-white lg:hidden text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -100 }}
        transition={{ duration: 0.5 }}
        className="max-xxs:h-[25vh] h-[20vh] bg-gray-700 z-[5] left-0 flex flex-col p-3 md:px-8 gap-1 justify-end absolute top-0 w-full"
      >
        {navLinks.map((link, index) => (
          <motion.a
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{
              opacity: isOpen ? 1 : 0,
              filter: isOpen ? "blur(0px)" : "blur(10px)",
            }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
            key={index}
            href={link.link}
            className="text-white font-sfpro underline cursor-pointer text-sm hover:text-neutral-200"
          >
            {link.title}
          </motion.a>
        ))}
      </motion.div>
      <nav className="font-sfpro gap-4 flex items-center max-lg:hidden w-fit">
        {navLinks.map((link, index) => (
          <motion.a
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            key={index}
            href={link.link}
            className="text-white lg:text-lg cursor-pointer hover:text-neutral-200 "
          >
            {link.title}
          </motion.a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
