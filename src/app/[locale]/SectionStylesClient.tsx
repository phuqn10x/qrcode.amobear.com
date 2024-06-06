"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { QrCodeIcon } from "@heroicons/react/24/outline";
import { QrStyleItemProps, qrStyleList } from "@/lib/qr_style_list";
import { motion } from "framer-motion";
import { transitionDampingMd } from "@/lib/animations";
import { cn, poppins, poppins500, useCurrentQrcodeType } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import { Container } from "@/components/Containers";
import React, {  useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { TrackLink } from "@/components/TrackComponents";
import { Step2 } from "@/components/StepSvg";
export function SectionStylesClient() {
  const currentQrcodeType = useCurrentQrcodeType();
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true, // activate rubber band effect
  });

  const render = (item: QrStyleItemProps, index: number) => {
    const itemPath = `/standard/${item.id}`;
    // const itemPath = `/style/standard/${item.id}`;
    const isActive = currentQrcodeType === item.id;


    return (
      <div
        key={"qrcode_style_" + index}
        className={cn(
          "snap-start pl-5 -ml-3 sm:pl-0 sm:ml-0 transition-opacity",
          isActive ? "" : "dark:opacity-70",
        )}
      >
        <TrackLink
          // trackValue={["qrcode_style", item.id]}
          trackValue={item.id}
          href={itemPath}
          scroll={false}
          prefetch={false}
        >
          <motion.div
            className={cn(
              "relative w-[calc((100vw-(12px)*5)/2)] sm:w-[195px] rounded-2xl bg-accent/30 overflow-hidden",
            )}
            whileTap={{
              scale: 0.95,
              opacity: 0.8,
            }}
            transition={transitionDampingMd}
          >
            <AspectRatio ratio={1} />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-white">
              <QrCodeIcon className="w-8 h-8 opacity-20 text-black" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
              <img
                src={`/assets/qrcodes/${item.image}`}
                alt=""
                className="block w-full h-full bg-white"
              />
            </div>
            <div
              className={cn(
                "absolute top-0 left-0 w-full h-full rounded-2xl",
                isActive ? "ring-[5px] ring-background ring-inset" : "",
              )}
            ></div>
            <div
              className={cn(
                "absolute top-0 left-0 w-full h-full rounded-2xl ring ring-inset",
                isActive
                  ? "ring-2 ring-foreground"
                  : "ring-1 ring-border dark:hidden",
              )}
            ></div>
          </motion.div>
        </TrackLink>
      </div>
    );
  };

  return (
    <div className="my-9 ">
       <div className="my-3  flex">
                <div className="inline-flex flex-1">
                  <Step2 />
                  <Label
                    className={cn(
                      poppins500.className,
                      "flex justify-between self-center lg:text-2xl md:text-base sm:text-sm font-medium ",
                    )}
                  >
                    Choose QR style
                  </Label>
                </div>
                <span className="align font-normal sm:text-[10px] text-sm text-foreground/50 content-center	">
                  {/* {t("subtitle")} */}
                  Swipe left or right to view more
                </span>
              </div>
      {/* </Container> */}

      <div
        className="overflow-x-auto no-scrollbar snap-x sm:snap-none snap-mandatory"
        {...events}
        ref={ref} // add reference and events to the wrapping div
      >
        <div className="flex flex-col">
          <div className="w-full flex flex-col items-center ">
            <div className="w-full ">
              <div className="flex sm:gap-3">
                <div className="w-3  sm:hidden" />

                {qrStyleList.map((item, index) => render(item, index))}

                <div className="w-6 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
