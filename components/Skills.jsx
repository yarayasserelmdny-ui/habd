"use client"; 
import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center py-15"
    >
      <div className="flex items-center justify-center h-[120px] w-full bg-[#0B192C] overflow-hidden">
        <motion.ul
          className="flex  justify-center items-center gap-12 text-lg text-white font-extrabold"
          animate={{ x: ["0%", "-50%"] }} 
          transition={{
            repeat: Infinity, 
            duration: 15, 
            ease: "linear",
          }}
        >
          <li>HTML</li>
          <li>/</li>
          <li>CSS</li>
          <li>/</li>
          <li>Bootstrap</li>
          <li>/</li>
          <li>Tailwind</li>
          <li>/</li>
          <li>React</li>
          <li>/</li>
          <li>Next.js</li>
          <li>/</li>
          <li>Node.js</li>
          <li>/</li>
          <li>Mongo_DB</li>
          <li>/</li>

          <li>HTML</li>
          <li>/</li>
          <li>CSS</li>
          <li>/</li>
          <li>Bootstrap</li>
          <li>/</li>
          <li>Tailwind</li>
          <li>/</li>
          <li>React</li>
          <li>/</li>
          <li>Next.js</li>
          <li>/</li>
          <li>Node.js</li>
          <li>/</li>
          <li>Mongo_DB</li>
          <li>/</li>
        </motion.ul>
      </div>
    </section>
  );
}
