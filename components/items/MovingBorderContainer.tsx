"use client";
import React from "react";
import { MovingBorderUi } from "../ui/moving-border";

export function MovingBorderContainer({
  borderRadius,
  children,
}: {
  borderRadius: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <MovingBorderUi
        borderRadius={borderRadius}
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        {children}
      </MovingBorderUi>
    </div>
  );
}
