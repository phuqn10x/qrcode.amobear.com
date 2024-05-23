
import { useTranslations } from "next-intl";
import {
  Container,
} from "@/components/Containers";
import React, { createContext } from 'react';

import { cn, oohBaby, poppins } from "@/lib/utils";

import CircleHero from "@/components/CircleHero";

import { InfiniteMovingSlide } from "@/components/ui/infinite-moving-slide";

export function SectionHero() {
  const t = useTranslations("index.hero");
  const images = [
    {
      name: "anime1",
      url: "anime_1",
    },
    {
      name: "anime2",
      url: "anime_2",
    },
    {
      name: "city1",
      url: "city_1",
    },
    {
      name: "food1",
      url: "food_1",
    },
    {
      name: "game1",
      url: "game_1",
    },
    {
      name: "love1",
      url: "love_1",
    },
    {
      name: "structure1",
      url: "structure_1",
    },
  ];

  return (
    <div className="_mt-28 _lg: lg:pt-40  pt-36 pb-50 relative">
      <Container>
        <div className="mb-[100px]">
         <CircleHero />
          <div className="flex flex-col	items-center mb-9">
            <h1
              className={cn(
                poppins.className,
                "uppercase  text-4xl lg:text-7xl font-bold text-center	leading-9 lg:leading-[5rem]",
              )}
            >
              Generator QR Code & Link
              <br></br>
              <span
                className={cn(oohBaby.className, "capitalize lg:text-5xl ")}
              >
                With
              </span>
              <br></br>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-qr to-purple-qr ">
                QR CODE AI
              </span>
            </h1>
            <p className="max-w-[600px] line-clamp-4 text-base lg:text-base mt-9 text-center text-pretty ">
              Create, Customize, and Track Stunning QR Codes Art with Our Free
              QR Code AI Generator. Seamlessly integrate these artistic codes
              into your marketing materials, packaging, and digital platforms.
           
            </p>
          </div>
          <InfiniteMovingSlide items={images} direction="left" speed="normal" />

         
        </div>
      </Container>
    </div>
  );
}
