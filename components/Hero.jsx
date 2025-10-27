"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Icons from './Icons.jsx';

export default function Hero() {
    return (
        <>
            <section id="hero" className="text-white flex justify-around items-center p-25 space-x-80 h-[660px]">
                <motion.div
                    initial={{ x: -150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-left max-w-xl flex flex-col items-start space-y-8" >
                    <div className="space-y-5">
                        <h1 className="text-5xl font-semibold">Yara ELmadany</h1>
                        <h2 className="text-3xl font-semibold">
                            And I’m a <span className="text-[#FF6500]">Full-Stack Developer</span>
                        </h2>
                        <p className="max-w-md">
                            I’m a professional Full-Stack Developer skilled in HTML, CSS, Tailwind, JavaScript, React, Node.js, and MongoDB.
                            I build modern, efficient, and scalable web applications from front-end to back-end.
                        </p>
                    </div>
                    <Icons />

<a
  href="/Yara.pdf"
  download="Yara.pdf"
  className="bg-[#FF6500] text-white rounded-xl w-50 p-2 hover:scale-105 transition text-center"
>
  Download CV
</a>

                </motion.div>
                <motion.img
                    src="/me.png"
                    alt="Yara"
                    className="h-[420px] w-[420px]"
                    initial={{ x: 150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }} />
            </section>
        </>
    );
}
