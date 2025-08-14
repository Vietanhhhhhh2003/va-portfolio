import React from "react";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { PiFileSqlBold } from "react-icons/pi";
import SingleSkills from "./SingleSkills";
import { motion } from "framer-motion";
import { fadeIn } from "../../assets/framerMotion/variants";
import { div } from "motion/react-client";

const skills = [
  {
    Skill: "HTML",
    icon: IoLogoHtml5,
  },
  {
    Skill: "CSS",
    icon: FaCss3,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "React",
    icon: FaReact,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    Skill: "Python ",
    icon: FaPython,
  },
  {
    skill: "SQL",
    icon: PiFileSqlBold,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkills
                key={index}
                text={item.skills}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
