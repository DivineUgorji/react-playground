"use client";

import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

export const ProductShowcase = () => {
  const appImageRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImageRef,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <div className="bg-black text-white text-center bg-linear-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive Interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <div className="inline-flex">
          <motion.div
            style={{
              opacity: opacity,
              rotateX: rotateX,
              transformPerspective: "800px",
            }}
          >
            <Image
              src={appScreen}
              alt="product screenshot"
              className="mt-14"
              ref={appImageRef}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
