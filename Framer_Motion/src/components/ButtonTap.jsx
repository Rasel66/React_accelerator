import React from "react";
import { motion } from "framer-motion";

const ButtonTap = () => {
  return (
    <div>
      <motion.button
        className="bg-black text-white p-1 rounded"
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.2, transition: 0.3 }}
      >
        Click me
      </motion.button>

      <motion.button
        className="bg-black text-white p-1 rounded mx-4"
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.2, transition: { yoyo: Infinity } }}
      >
        Tap me
      </motion.button>
    </div>
  );
};

export default ButtonTap;
