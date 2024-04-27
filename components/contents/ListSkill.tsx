"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const listSkill = [
  {
    title: "English",
    exp: 5.0,
    color: "gray",
    unit: "Score",
  },
  {
    title: "Laravel",
    exp: 3,
    color: "",
    unit: "years EXP",
  },
  {
    title: "Laravel - PHP",
    exp: 3,
    unit: "years EXP",
  },
  {
    title: "Nextjs/Reactjs",
    exp: 3,
    unit: "years EXP",
  },
  {
    title: "Vuejs",
    exp: 2,
    unit: "years EXP",
  },
  {
    title: "Python",
    exp: 1,
    unit: "years EXP",
  },
  {
    title: "C#",
    exp: 1,
    unit: "years EXP",
  },
  {
    title: "Java",
    exp: 1,
    unit: "years EXP",
  },
];
const listColorRand = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-pink-500",
  "bg-purple-500",
  "bg-orange-500",
];
export default function ListSkill() {
  return (
    <div className="relative" id="skill">
      <h1 className="text-center text-4xl font-medium font-bold mb-[30px]">
        My skills
      </h1>
      <div className="md:grid grid-cols-2 md:gap-7">
        {listSkill.map((_, index) => (
          <Skill key={index} {..._} />
        ))}
      </div>
      <motion.div
        style={{ opacity: 0, y: -160 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=" flex flex-col justify-center items-center"
      ></motion.div>
      <Link
        href="#more_experience"
        className="absolute -bottom-[8rem] min-w-fit left-1/2 -translate-x-1/2  py-3 px-4 bg-black text-white border border-[0.02] text-center rounded-full hover:bg-white hover:text-black border-white border-transparent text-black font-bold text-base"
      >
        More experience
      </Link>
    </div>
  );
}
export function Skill({
  title,
  exp,
  unit,
}: {
  title: string;
  exp: number;
  unit: string;
}) {
  const [isChangeColor, setisChangeColor] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setisChangeColor(true);
    }, 800);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, x: -250 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2.05 }}
      className="md:w-full md:h-full h-[50px] rounded bg-gray-200 text-black dark:bg-transparent dark:text-white my-4 border border-[0.01] border-slate-500 flex flex-row justify-between gap-2 items-center px-6 hover:bg-slate-300 hover:text-black dark:hover:border-none"
    >
      <motion.h3
        animate={{ rotateY: 360 }}
        transition={{ duration: 1.5, times: 0 }}
        className={cn(
          "font-bold px-2 text-white rounded-full",
          isChangeColor &&
            listColorRand[Math.floor(Math.random() * listColorRand.length)]
        )}
      >
        {title}
      </motion.h3>
      <div className="flex gap-1">
        <p>{exp}</p>
        <span className="font-italic">{`${unit}`}</span>
      </div>
    </motion.div>
  );
}
