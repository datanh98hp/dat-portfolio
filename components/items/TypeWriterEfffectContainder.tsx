"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothContainer({
  text,
  highLineWord,
  highLineClass,
}: {
  text: string;
  highLineWord?: string;
  highLineClass?: string;
}) {
  // console.log(text.split(""));
  const genWords = (text: string) => {
    const list = text?.split(" ");
    const result: any = [];
    const lsHighLine = highLineWord?.split(" ");
    list.map((item: string) => {
      if (highLineWord !== null) {
        result.push({
          text: item,
        });
      } else {
        lsHighLine?.map((value: string) => {
          if (value.includes(item)) {
            result.push({
              text: item,
              className: highLineClass,
            });
          }
        });
      }
    });
    return result;
  };

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
      text: "Đỗ Văn Đạt.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const [isShowBtn, setisShowBtn] = useState(false);
  useEffect(() => {
    return () => {
      setInterval(() => {
        setisShowBtn(true);
      }, 3000);
    };
  }, [isShowBtn]);
  return (
    <div className="flex flex-col items-center justify-center h-[30rem]  ">
      {/* <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p> */}
      <TypewriterEffectSmooth
        words={words}
        className="text-6xl"
        cursorClassName="bg-white-500"
      />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4"
      >
        {isShowBtn && (
          <a
            href="#section_1"
            className="w-40 h-10 pt-1 hover:bg-black-500 hover:bg-opacity-50 hover:text-white rounded-full bg-white border text-center dark:border-white hover:font-semibold border-transparent text-black font-bold  text-2xl"
          >
            Let's go!
          </a>
        )}
      </motion.div>
    </div>
  );
}
