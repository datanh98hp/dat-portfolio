"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothContainer({
  text,
  highLineWord,
  highLineClass,
}: {
  text: string;
  highLineWord?:string
  highLineClass: string;
}) {
  const words = [
    {
      text: "Wellcome",
    },
    {
      text: "to",
    },
    {
      text: "Developer's",
    },
    {
      text: "Developer's",
      className: "text-white-500 dark:text-white-500",
    },
    {
      text: "Đỗ Văn Đạt.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  const [isShowBtn, setisShowBtn] = useState(false);
  useEffect(() => {
    return () => {
      setInterval(()=>{
        setisShowBtn(true)
      },3000);
    };
  }, [isShowBtn]);
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      {/* <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p> */}
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        {isShowBtn && (
          <motion.a
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 2,
              repeat: 0,
              repeatType: "reverse",
            }}
            href="#section_1"
            className="w-40 h-10 pt-1 hover:bg-black-500 hover:bg-opacity-50 hover:text-white rounded-full bg-white border text-center dark:border-white hover:font-semibold border-transparent text-black font-bold  text-2xl"
          >
            Let's go ...
          </motion.a>
        )}
        {/* <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button> */}
      </div>
    </div>
  );
}
