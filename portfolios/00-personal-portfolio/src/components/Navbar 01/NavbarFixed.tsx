import { motion } from "framer-motion";
import React from "react";

const navVariants = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};

function NavbarFixed() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={navVariants}
      className="fixed z-[999] top-4 left-1/2 -translate-x-1/2 rounded-full p-1 bg-lightgray backdrop-blur-lg border border-white border-opacity-[.08]"
    >
      <ul className="flex items-center gap-2 text-sm font-medium font-poppins text-white">
        <li>
          <a href="#" className="p-4 hover:opacity-50">
            Inicio
          </a>
        </li>
        <li>
          <a href="#" className="p-4 hover:opacity-50">
            Sobre mi
          </a>
        </li>
        <li>
          <a href="#" className="p-4 hover:opacity-50">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#" className="p-4 hover:opacity-50">
            Contacto
          </a>
        </li>
        <li>
          <button className="font-poppins text-sm px-4 py-2 rounded-3xl text-white font-medium bg-darkpurple border border-white border-opacity-[.08] hover:border-opacity-25">
            Toast
          </button>
        </li>
      </ul>
    </motion.div>
  );
}
export default NavbarFixed;