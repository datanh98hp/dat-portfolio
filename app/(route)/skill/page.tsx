import ListSkill from "@/components/contents/ListSkill";
import { StickyScrollRevealContainer } from "@/components/items/StickyScrollReveal";
import { VortexContainer } from "@/components/items/VortexContainer";
import { NavbarMenu } from "@/components/items/navbar";
import React from "react";
export default function Skill() {
  return (
    <main className="flex flex-col ">
      <NavbarMenu />
      <VortexContainer className="h-screen">
        <ListSkill />
      </VortexContainer>
      <div id="more_experience" className="h-screen">
        <StickyScrollRevealContainer />
      </div>
    </main>
  );
}
