"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { cn } from "@/lib/utils";

export function AuroraBackgroundContainer({
  children,
  classNameContainer,
}: {
  children: React.ReactNode;
  classNameContainer:string;
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
        <div className="font-extralight text-3xl md:text-4xl dark:text-neutral-200 py-4">
          Contact to me
        </div>
        {/* <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Debug now
        </button> */}
        {children}
      </motion.div>
    </AuroraBackground>
  );
}
