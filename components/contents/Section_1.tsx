import React from "react";
import Image from "next/image";
import { BackgroundGradientAnimationContainer } from "@/components/items/BackgroundGradientAnimation";
import { TextGenerateEffectContainer } from "@/components/items/TextGenerateEffectContainer";

export default function Section_1() {
  return (
    <>
      <div
        id="section_1"
        className="flex h-screen border border-0 rounded-3xl justify-evenly md:mx-[8vw] mt-[5.5vh] overflow-hidden"
      >
        <BackgroundGradientAnimationContainer>
          <div className="flex h-full flex-col md:flex-row justify-center items-center">
            <div className="md:w-[50%] ">
              <TextGenerateEffectContainer words="Wellcome to Developer's Đỗ Văn Đạt" />
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
    </>
  );
}
