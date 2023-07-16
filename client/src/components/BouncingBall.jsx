import React, { useState } from "react";
import { motion } from "framer-motion";
import { useScreensize } from "../hooks/useScreenSize";
export default function BouncingBall() {
  const { screenSize } = useScreensize();
  const screens = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
    xxxl: 2150,
  };
  console.log(screenSize.dynamicWidth);
  return (
    <motion.div
      animate={{
        x: [-100, 200, 500, 800, 1100, 1400, 1700, 2000, 2300],
      }}
      transition={{
        duration: 10,
      }}
      className={screenSize.dynamicWidth > 2000 ? "bouncingball" : ""}
    />
  );
}
