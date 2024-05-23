"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingSlide } from "@/components/ui/infinite-moving-slide";

export function SlideImages(images : { name: string; url: string;}[]) {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingSlide
        items={images}
        direction="left"
        speed="normal"
      />
    </div>
  );
}
