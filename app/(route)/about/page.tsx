"use client";
import { AuroraBackgroundContainer } from "@/components/items/AuroraBackgroundContainer";
import { SpotlightPreview } from "@/components/items/SpotlightPreview";
import { NavbarMenu } from "@/components/items/navbar";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <NavbarMenu />
      <div className="h-screen flex flex-col">
        <SpotlightPreview
          title="About for Developer's Dat"
          description="Là một người sinh ra trong một gia đình có truyền thống hiếu học, và có niềm đam mê máy tính từ khi còn học trung học."
        />
        <motion.div
          style={{ y: "calc(100vw - 50%)" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col justify-center items-center"
        >
          <Link
            href="#sec_1"
            className="py-3 px-4 bg-black text-white border border-[0.02] text-center rounded-full hover:bg-white hover:text-black border-white border-transparent text-black font-bold  text-base"
          >
            Next to
          </Link>
        </motion.div>
      </div>
      <div
        id="sec_1"
        className="h-screen flex flex-col"
      >
        <AuroraBackgroundContainer>
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Background lights are cool you know.
          </div>
        </AuroraBackgroundContainer>
      </div>
    </main>
  );
}
