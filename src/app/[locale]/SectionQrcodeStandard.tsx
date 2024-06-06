"use client";
import { SectionStylesClient } from "@/app/[locale]/SectionStylesClient";
import { LayoutContext } from "@/components/LayoutProvider";
import { StyleTitle } from "@/components/Titles";
import React, { useContext } from "react";
import { Label } from "@/components/ui/label";
import { ScanButton } from "@/components/ScanButton";
import { UrlInput } from "@/components/hero/UrlInput";
import { cn, poppins500 } from "@/lib/utils";
import { Step1 } from "@/components/StepSvg";
export default function SectionQrcodeStandard({title, subtitle}: {title: string, subtitle: string}) {
  const context = useContext(LayoutContext);
  return (
    <div>
      <div className="flex flex-col items-center">
      <StyleTitle title={title} subtitle={subtitle} />
      </div>
      <div className="mt-6 w-full ">
        <div className="flex my-2">

          <Step1 />
          <Label className={cn(poppins500.className," md:text-base content-center lg:text-2xl sm:text-base font-medium mb-1.5")}>
          {/* {t("url")} */}
          
          Type your text
          <div className="flex items-center gap-3">
          <div className="text-sm">
           {/* 10 */}
           {/* <span className="opacity-50">/255</span> */}
          </div>
          </div>
          </Label>
          {/* <ScanButton name="scan"  /> */}
          </div>
          <UrlInput />
      </div>
      <SectionStylesClient />
      {context?.value}
    </div>
  );
}
