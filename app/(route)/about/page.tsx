"use client";
import ProfileCard from "@/components/contents/ProfileCard";
import { AuroraBackgroundContainer } from "@/components/items/AuroraBackgroundContainer";
import { MovingBorderContainer } from "@/components/items/MovingBorderContainer";
import { SpotlightPreview } from "@/components/items/SpotlightPreview";
import { NavbarMenu } from "@/components/items/navbar";
import { CardStack } from "@/components/ui/card-stack";
import { Highlight } from "@/components/ui/hero-highlight";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaFaceGrinTears } from "react-icons/fa6";

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
      <SpotlightPreview
        classNameContainer=""
        title="About for Developer's Dat"
        description="Là một người sinh ra trong một gia đình có truyền thống hiếu học, và có niềm đam mê máy tính từ khi còn học trung học."
      ></SpotlightPreview>
      <motion.div
        style={{ y: "calc(100vw - 60%)" }}
        animate={{ y: -150 }}
        transition={{ duration: 1.5 }}
        className=" flex flex-col justify-center items-center"
      >
        <Link
          href="#sec_1"
          className="py-3 px-4 bg-black text-white border border-[0.02] text-center rounded-full hover:bg-white hover:text-black border-white border-transparent text-black font-bold  text-base"
        >
          Next to
        </Link>
      </motion.div>
      <div id="sec_1" className="">
        <ProfileCard />
      </div>

      <div id="sec_2">
        <AuroraBackgroundContainer classNameContainer="h-screen w-full">
          <div className="md:flex  px-6">
            {/* <CardStack items={CARDS} /> */}
            <div className="md:p-3 md:mt-0 mt-20 dark:text-white dark:bg-transparent">
              <h3 className="text-center text-xl">Contact to me</h3>

              <div className="p-4 border rounded-xl mt-2 flex flex-col gap-3 bg-white bg-opacity-20 border-gray-400 dark:text-white">
                <textarea
                  className="resize-none min-w-80 p-3 w-full rounded-md bg-transparent border border-[0.08] border-gray-200"
                  placeholder="Type your message"
                />
                <input
                  type="email"
                  className="rounded-md bg-transparent h-[50%] w-full p-3 border border-[0.08] bg-transparent border-gray-200"
                  placeholder="Email"
                />
                <button className="md:mt-5 dark:text-white dark:bg-transparent border border-gray-500 dark:border-[0.01] md:bg-black md:text-white bg-slate-300 hover:shadow-xl hover:shadow-2xl border-[0.02] text-black p-2 rounded-md">
                  Send
                </button>
              </div>
            </div>
          </div>
          <Link
            href="#sec_2"
            className="w-40 h-10 p-1 mt-16 border-spacing-1 border-gray-300 rounded-full dark:text-white border text-center border-[0.02] border-black dark:border-white border-transparent dark:text-white bg-transparent dark:text-black font-mono  text-2xl dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
          >
            Next to
          </Link>
        </AuroraBackgroundContainer>
      </div>
      <div id="sec_3" className="h-screen w-full relative">
        <iframe
          className="aspect-auto h-screen"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12544.67104930842!2d106.54009734204212!3d20.809363597535775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a77d378526cad%3A0x8bcacb55d47f4b7a!2zUXXhu5FjIFR14bqlbiwgQW4gTMOjbywgSGFpIFBob25nLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1712806396418!5m2!1sen!2s"
          width="100%"
          height="90%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen={true}
          aria-controls="map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <Link
          href="#sec_3"
          className="absolute bottom-2 left-1/2 -translate-x-1/2 py-3 px-4 dark:bg-black dark:text-white bg-white text-black border border-[0.02] text-center rounded-full hover:bg-white hover:text-black border-white border-transparent text-black font-bold  text-base"
        >
          Next to
        </Link>
      </div>
    </main>
  );
}
