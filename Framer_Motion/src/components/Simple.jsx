import React from "react";
import { motion } from "framer-motion";
const Simple = () => {
  return (
    <div>
      <motion.div
        className="bg-red-500 border w-32 h-32 rounded-full"
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
    </div>
  );
};

export default Simple;
