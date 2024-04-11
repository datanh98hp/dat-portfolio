"use client";
import { AuroraBackgroundContainer } from "@/components/items/AuroraBackgroundContainer";
import { SpotlightPreview } from "@/components/items/SpotlightPreview";
import { ThreeDCardContainer } from "@/components/items/ThreeDCardContainer";
import { NavbarMenu } from "@/components/items/navbar";
import { CardStack } from "@/components/ui/card-stack";
import { Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import Link from "next/link";

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];
export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <NavbarMenu />
      <div className="h-screen flex flex-col items-center justify-center">
        <SpotlightPreview classNameContainer=""
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
      <div id="sec_1" className=" w-screen h-screen flex flex-col">
        <AuroraBackgroundContainer classNameContainer="md:border border-[0.02] border-gray-200 rounded-3xl p-20">
          <div className="md:flex items-center justify-center mt-10 w-full h-full p-4">
            <CardStack items={CARDS} />
            <div className="md:p-6 md:mt-0 mt-20 dark:text-white dark:bg-transparent">
              <div className="md:p-1 dark:text-white dark:bg-transparent flex flex-col gap-4">
                <div className="p-4 border rounded-xl mt-2 flex flex-col gap-6 bg-white bg-opacity-20 border-gray-400 dark:text-white">
                  <textarea
                    className="resize-none p-3 rounded-md bg-transparent border border-[0.08] border-gray-200"
                    placeholder="Type your message"
                  />
                  <input
                    type="email"
                    className="rounded-md bg-transparent h-[40px] p-3 border border-[0.08] bg-transparent border-gray-200"
                    placeholder="Email"
                  />
                  <button className="dark:text-white dark:bg-transparent border border-gray-500 dark:border-[0.01] md:bg-black md:text-white bg-slate-300 hover:shadow-xl hover:shadow-2xl border-[0.02] text-black p-3 rounded-md">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Link
            href="#sec_2"
            className="w-40 h-10 pt-1 border-spacing-1 border-gray-300 rounded-full dark:text-white border text-center border-[0.02] border-black dark:border-white border-transparent dark:text-white bg-transparent dark:text-black font-mono  text-2xl dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
          >
            Next to
          </Link>
        </AuroraBackgroundContainer>
      </div>

      <div
        id="sec_2"
        className="relative h-full w-screen flex flex-col md:justify-center items-center"
      >
        <iframe
          className="aspect-auto h-screen"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12544.67104930842!2d106.54009734204212!3d20.809363597535775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a77d378526cad%3A0x8bcacb55d47f4b7a!2zUXXhu5FjIFR14bqlbiwgQW4gTMOjbywgSGFpIFBob25nLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1712806396418!5m2!1sen!2s"
          width="1200"
          height="800"
          style={{ border: 0 }}
          allowFullScreen={true}
          aria-controls="map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <Link
          href="#sec_3"
          className="absolute bottom-10 w-40 h-10 border-spacing-1 border-gray-300 rounded-full dark:text-white border text-center border-[0.02] border-black dark:border-white border-transparent dark:text-white bg-transparent dark:text-black font-mono  text-2xl dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white text-black bg-white dark:bg-black dark:text-white"
        >
          Next to
        </Link>
      </div>
    </main>
  );
}
