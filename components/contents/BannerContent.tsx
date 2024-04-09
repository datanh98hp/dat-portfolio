import React from "react";
import { TypewriterEffectSmoothContainer } from "@/components/items/TypeWriterEfffectContainder";

export default function BannerContent() {
  return (
    <>
      <div className="bg-cube-banner bg-cover bg-clip-content bg-center h-screen w-full">
        <div className="flex h-full flex-col md:flex-row gap-10 justify-center items-center">
          <TypewriterEffectSmoothContainer
            text="Wellcome to Developer's Đỗ Văn Đạt 98"
            highLineWord="Đỗ Văn Đạt"
            highLineClass="text-white-500 dark:text-blue-500"
          />
        </div>
      </div>
    </>
  );
}
