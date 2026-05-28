"use client";
import * as React from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

interface SmoothScrollHeroProps {
  scrollHeight?: number;
  desktopImage: string;
  mobileImage: string;
  initialClipPercentage?: number;
  finalClipPercentage?: number;
}

const SmoothScrollHeroBackground: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 1500,
  desktopImage,
  mobileImage,
  initialClipPercentage = 20,
  finalClipPercentage = 80,
}) => {
  const { scrollY } = useScroll();

  // Starts full-screen, shrinks as user scrolls
  const clipStart = useTransform(scrollY, [0, scrollHeight], [0, initialClipPercentage]);
  const clipEnd   = useTransform(scrollY, [0, scrollHeight], [100, finalClipPercentage]);
  const clipPath  = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

  // Subtle zoom-in as image shrinks
  const backgroundSize = useTransform(scrollY, [0, scrollHeight], ["100%", "118%"]);

  // Fade out before the section ends so no white gap lingers
  const opacity = useTransform(scrollY, [scrollHeight * 0.55, scrollHeight], [1, 0]);

  return (
    <motion.div
      className="sticky top-0 h-screen w-full bg-white"
      style={{ clipPath, opacity, willChange: "clip-path, opacity" }}
    >
      <motion.div
        className="absolute inset-0 md:hidden"
        style={{ backgroundImage: `url(${mobileImage})`, backgroundSize, backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
      />
      <motion.div
        className="absolute inset-0 hidden md:block"
        style={{ backgroundImage: `url(${desktopImage})`, backgroundSize, backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
      />
      <div className="absolute inset-0 bg-black/10" />
    </motion.div>
  );
};

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 1500,
  desktopImage,
  mobileImage,
  initialClipPercentage = 20,
  finalClipPercentage = 80,
}) => {
  return (
    <div style={{ height: `calc(${scrollHeight}px + 100vh)` }} className="relative w-full">
      <SmoothScrollHeroBackground
        scrollHeight={scrollHeight}
        desktopImage={desktopImage}
        mobileImage={mobileImage}
        initialClipPercentage={initialClipPercentage}
        finalClipPercentage={finalClipPercentage}
      />
    </div>
  );
};

export default SmoothScrollHero;
