"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { IconMoon, IconSun } from "@tabler/icons-react";
import ButtonMagicBorder from "./ButtonBorderMagic";

export function NavbarMenu() {
  return (
    <div className="relative w-full flex items-center justify-center ">
      <Navbar className="top-4" />
      {/* <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p> */}
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
        repeat: 0,
        repeatType: "reverse",
      }}
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 b",
        className
      )}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Explore">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/skill">Skill</HoveredLink>
            <HoveredLink href="/experience">Experience</HoveredLink>
            <HoveredLink href="/gallery">Gallery</HoveredLink>
            <HoveredLink href="/social">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-sm md:grid md:grid-cols-2 md:gap-10 md:p-2 ">
            <ProductItem
              classItem="hover:shadow-2xl hover:rounded-xl p-4"
              title="Project name (1)"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              classItem="hover:shadow-2xl hover:rounded-xl p-4"
              title="Project name (2)"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
          </div>
        </MenuItem>
        <HoveredLink href="/about">About</HoveredLink>
        {/* <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem> */}
        
          {currentTheme == "dark" ? (
            <IconSun onClick={() => setTheme("light")} />
          ) : (
            <IconMoon color="black" onClick={() => setTheme("dark")} />
          )}
    
      </Menu>
    </motion.div>
  );
}
