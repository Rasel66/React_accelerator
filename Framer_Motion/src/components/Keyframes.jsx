import React from "react";
import { motion } from "framer-motion";
const Keyframes = () => {
  return (
    <motion.div
      className="bg-blue-500 h-32 w-32 m-4"
      animate={{
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        scale: [1, 1, 2, 2, 1],
        rotate: [0, 90, 180, 270, 0],
      }}
      transition={{ duration: 1.5 }}
    ></motion.div>
  );
};

export default Keyframes;
