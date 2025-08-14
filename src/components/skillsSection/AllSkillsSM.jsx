import React from "react";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { PiFileSqlBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../assets/framerMotion/variants";

const skills = [
  { skill: "HTML", icon: IoLogoHtml5 },
  { skill: "CSS", icon: FaCss3 },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "React", icon: FaReact },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "Python", icon: FaPython },
  { skill: "SQL", icon: PiFileSqlBold },
];

const AllSkillsSM = () => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => (
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          key={index}
          className="flex flex-col items-center"
        >
          <item.icon className="text-7xl text-orange" />
          <p className="text-center mt-4 text-white">{item.skill}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSM;
