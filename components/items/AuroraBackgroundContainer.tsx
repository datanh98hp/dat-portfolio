"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { cn } from "@/lib/utils";

export function AuroraBackgroundContainer({
  children,
  classNameContainer,
}: {
  children?: React.ReactNode;
  classNameContainer?:string;
}) {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={cn(
          "relative flex flex-col gap-4 items-center justify-center px-4",
          classNameContainer
        )}
      >
        {/* <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Background lights are cool you know.
        </div> */}
        {children}
      </motion.div>
    </AuroraBackground>
  );
}
