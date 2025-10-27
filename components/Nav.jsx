"use client"; 
import { motion } from "framer-motion";

export default function Navbar() {
  return (
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-between items-center bg-[#0B192C] text-white py-6 font-bold"
      >
        <div className="text-4xl font-bold pl-30 text-[#FF6500]">
          <a href="#hero">Yara</a>
        </div>
        <div>
          <ul className="flex gap-10 pr-30">
            <li><a href="#about">About</a></li> 
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </motion.nav>
  );
}
