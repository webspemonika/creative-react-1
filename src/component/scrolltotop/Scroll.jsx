import React from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function Scroll() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 cursor-pointer w-16 h-16  bg-amber-500  rounded-full
      flex items-center justify-center  shadow-lg "
      onClick={scrollToTop}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
      >
        <FaArrowUp className="text-xl text-white" />
      </motion.div>
    </div>
  );
}
