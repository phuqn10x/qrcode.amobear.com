"use client";
import { SectionStylesClient } from "@/app/[locale]/SectionStylesClient";
import { LayoutContext } from "@/components/LayoutProvider";
import { StyleTitle } from "@/components/Titles";
import React, { useContext } from "react";
import { Label } from "@/components/ui/label";
import { ScanButton } from "@/components/ScanButton";
import { UrlInput } from "@/components/hero/UrlInput";
import { cn, poppins500 } from "@/lib/utils";
export default function SectionQrcodeStandard({title, subtitle}: {title: string, subtitle: string}) {
  const context = useContext(LayoutContext);
  return (
    <div>
      <div className="flex flex-col items-center">
      <StyleTitle title={title} subtitle={subtitle} />
      </div>
      <div className="mt-6 w-full ">
        <div className="flex justify-between">

        
          <Label className={cn(poppins500.className," md:text-2xl sm:text-sm font-medium mb-1.5")}>
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
