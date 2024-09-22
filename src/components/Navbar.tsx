import logo from "/logo.svg?url";
import slash from "../assets/slash.svg";
import { navLinks } from "../lib/data";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <header className="absolute top-0 p-8 px-24 z-[50] w-full flex items-center justify-between">
      <div>
        <motion.img
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
         src={logo} alt="Unesco Logo" className=" z-10 w-52 " />
        <motion.img 
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
        src={slash} alt="Slash" className="mt-0.5" />
      </div>
      <nav className="font-sfpro gap-4 flex items-center">
        {navLinks.map((link, index) => (
          <motion.a
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.5, duration: 0.5,  }}
            key={index}
            href={link.link}
            className="text-white text-lg cursor-pointer hover:text-neutral-200 "
          >
            {link.title}
          </motion.a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
