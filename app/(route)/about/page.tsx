import FormContact from "@/components/contents/FormContact";
import ProfileCard from "@/components/contents/ProfileCard";
import { AuroraBackgroundContainer } from "@/components/items/AuroraBackgroundContainer";
import { SpotlightPreview } from "@/components/items/SpotlightPreview";
import { NavbarMenu } from "@/components/items/navbar";
import { Highlight } from "@/components/ui/hero-highlight";

import Link from "next/link";
import { FaArrowCircleUp } from "react-icons/fa";

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
        description="To develop website like as a freelancer job."
      />

      <div id="sec_1" className="">
        <ProfileCard />
      </div>

      <div id="sec_2">
        <AuroraBackgroundContainer classNameContainer="">
          {/* <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Contact to me
          </div> */}
          <FormContact />
        </AuroraBackgroundContainer>
        {/* <div className="md:flex">
       
          <div className="md:p-3 md:mt-0 mt-20 dark:text-white dark:bg-transparent">
          
          </div>
        </div> */}
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
          href="#spotlight"
          className="absolute bottom-2 left-1/2 -translate-x-1/2 py-3 px-4 dark:bg-black dark:text-white bg-white text-black border border-[0.02] text-center rounded-full hover:bg-white hover:text-black border-white border-transparent text-black font-bold text-base p-2"
        >
          <FaArrowCircleUp />
        </Link>
      </div>
    </main>
  );
}
