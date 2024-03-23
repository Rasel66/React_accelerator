import React from "react";
import { motion } from "framer-motion";

const TextMotion = () => {
  const message = "Bangladesh is a very beautiful country in South Asia.";
  const wordArays = message.split(" ");

  return (
    <div className="text-2xl">
      {wordArays.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: "-100vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index / 10 }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </div>
  );
};
export default TextMotion;
