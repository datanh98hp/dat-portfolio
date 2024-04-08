import { BackgroundGradientAnimationContainer } from "@/components/items/BackgroundGradientAnimation";
import { GlobeContainer } from "@/components/items/Globe";
import { CardHoverEffectContainer } from "@/components/items/HoverEffectContainer";
import { TextGenerateEffectContainer } from "@/components/items/TextGenerateEffectContainer";
import { TypewriterEffectSmoothContainer } from "@/components/items/TypeWriterEfffectContainder";
import { NavbarMenu } from "@/components/items/navbar";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="bg-cube-banner bg-cover bg-clip-content bg-center h-screen w-full">
        <div className="flex h-full flex-col md:flex-row gap-10 justify-between items-center">
          <div className="md:w-full">
            <TypewriterEffectSmoothContainer
              text="Build awesome apps with Aceternity."
              highLineClass="text-white-500 dark:text-blue-500"
            />
          </div>
        </div>
      </div>
      <NavbarMenu />
      <div
        id="section_1"
        className="flex h-screen border border-0 rounded-3xl justify-evenly md:mx-[8vw] mt-[5.5vh] overflow-hidden"
      >
        <BackgroundGradientAnimationContainer>
          <div className="flex h-full flex-col md:flex-row justify-center items-center">
            <div className="md:w-[50%] ">
              <TextGenerateEffectContainer words="Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate." />
            </div>
            <div className="md:w-[50%] pt-6 md:pt-0 flex items-center justify-center">
              <Image
                className="border border-0 hover:border-[3rem] bg-transparent bg-opacity-50 rounded-full shadow-2xl hover:shadow-black-500 hover:bg-black-500 hover:bg-opacity-50 p-6 md:p-6"
                src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-trendy-modern-home-living-room-3d-cartoon-stereoscopic-isometric-view-for-png-image_9015295.png"
                width={500}
                height={500}
                alt="Tailwind Master Kit"
              />
            </div>
          </div>
        </BackgroundGradientAnimationContainer>
      </div>
      <div
        id="section_2"
        className="flex h-fit border border-0 bg-blue-900 bg-opacity-15 border-collapse rounded-3xl justify-evenly md:mx-[8vw] mt-[5.5vh] overflow-hidden"
      >
        <CardHoverEffectContainer />
      </div>
      <div id="section_3">
        <GlobeContainer/>
      </div>
    </main>
  );
}
