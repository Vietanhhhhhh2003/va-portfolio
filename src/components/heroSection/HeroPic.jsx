import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../assets/framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex justify-center items-center"
    >
      <img
        src="public/images/HeroPic.jpeg"
        alt="Nguyen Xuan Viet Anh"
        className="max-h-[450px] w-auto"
      />
    </motion.div>
  );
};

export default HeroPic;
