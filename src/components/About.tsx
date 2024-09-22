import bensonimage from "../assets/benson.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-[#333] flex items-center p-24 flex-col  w-full">
      <motion.h1
        className="text-3xl text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About UNESCO Youth Club
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-4 max-w-2xl text-lg text-center text-[rgba(253,254,254,0.60)]"
      >
        The UNESCO Youth Club at Covenant University is dedicated to promoting
        the core objectives of UNESCO—peace, justice, and sustainable
        development—through education, science, and culture. Our mission is to
        foster collaboration within the student body, leading model projects,
        advising student associations, and promoting peace and security. We aim
        to empower students to create local solutions for global challenges by
        organizing events like the UNESCO Youth Forum, where ideas for campus
        development will be refined into actionable projects. Through these
        efforts, we strive to build a sustainable future for all.
      </motion.p>
      <div className="flex mt-28">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {" "}
          <Card
            heading="Our Vision"
            text="To empower students as global problem-solvers, fostering innovation and development through model UNESCO forums and collaborative solutions on campus."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50, scale: 1.2 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1.2,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-[300px] h-[350px] scale-[1.2] mx-6 shadow-xl shadow-black/50"
        >
          <img
            src={bensonimage}
            alt="Benson"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card
            heading="Our Mission"
            text="To engage Covenant University students in UNESCO-aligned initiatives that promote peace, security, education, science, and culture through impactful projects and strategic partnerships."
          />
        </motion.div>
      </div>
    </div>
  );
};
const Card = ({ heading, text }: { heading: string; text: string }) => {
  return (
    <div className="bg-white w-[350px] h-[350px] p-6 flex flex-col justify-center shadow-md ">
      <h2 className="capitalize text-left text-3xl font-sfproBold text-blue-800">
        {heading}
      </h2>
      <p className="text-gray-800 mt-2">{text}</p>
    </div>
  );
};
export default About;
