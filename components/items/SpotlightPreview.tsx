"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import Link from "next/link";

export function SpotlightPreview({
  classNameContainer,
  title,
  description,
}: {
  classNameContainer?: string;
  title?: string;
  description?: string;
}) {
  // const [showChild, setShowChild] = useState(false);
  // useEffect(() => {
  //   setShowChild(showChild);
  // }, [])
  // if (!showChild) {
  //   return null;
  // }
  return (
    <motion.div
      id="spotlight"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className={cn(
        "h-screen flex md:items-center md:justify-center dark:bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden",
        classNameContainer
      )}
    >
      <Spotlight className="top-40 left-0 md:left-60 md:-top-30" fill="white" />
      <div className="mt-40 md:mt-0 max-w-7xl mx-auto relative z-10  w-full md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b dark:from-white from-blue-950 dark:to-blue-950 to-white bg-opacity-50">
          {title}
        </h1>
        <p className="mt-4 font-normal dark:text-white text-white max-w-lg text-center mx-auto">
          {description}
        </p>
        <motion.div
          style={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-40 flex flex-col justify-center items-center"
        >
          <Link
            href="#sec_1"
            className="py-3 px-4 bg-black text-white border 
            border-[0.02] text-center rounded-full hover:bg-white hover:text-black border-white border-transparent text-black font-bold  text-base"
          >
            Next to
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
