import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

export function BackgroundGradientAnimationContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-10  inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl rounded-3xl">
        <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          {children}
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
