"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0B192C] h-[300px] flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center text-center mx-auto max-w-[900px] px-4">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-center"
        >
          <span className="text-[#FF6500]">About </span>
          <span className="text-white">me</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-white max-w-[900px] text-center pt-[30px] leading-relaxed text-lg"
        >
          I'm Yara Yasser Elmadany — a Full-Stack Developer with a passion for
          building modern, responsive, and efficient web applications.
          I’m currently studying Business Administration at the Faculty of
          Commerce, and I love combining creativity with technology to turn
          ideas into functional, impactful solutions.
          I work with HTML, CSS, Bootstrap, Tailwind, JavaScript, React,
          Next.js, Node.js, Express, and MongoDB — always learning and exploring
          new ways to write clean, scalable, and innovative code.
        </motion.p>
      </div>
    </section>
  );
}
