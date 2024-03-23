import React from "react";
import { motion } from "framer-motion";

const shapeVarient = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      type: "spring",
      ease: "easeInOut",
    },
  },
};

const Varients = () => {
  return (
    <div>
      <motion.div
        className="bg-green-700 h-32 w-32 rounded m-4"
        variants={shapeVarient}
        initial="initial"
        animate="animate"
      ></motion.div>
    </div>
  );
};

export default Varients;
