"use client";

import { useTranslations } from "next-intl";
import { CircleCheck, QrCodeIcon } from "lucide-react";
import { Box, Heading, Text, Theme } from "@radix-ui/themes";
import { transitionDampingMd } from "@/lib/animations";

import {
  Container,
  SplitLeft,
  SplitRight,
  SplitView,
} from "@/components/Containers";
import { Form, FormField } from "@/components/ui/form";
import { Path, PathValue, useForm, useWatch } from "react-hook-form";
import {
  ParamBooleanControl,
  ParamColorControl,
  ParamImageControl,
  ParamNumberControl,
  ParamSelectControl,
  ParamTextControl,
} from "@/components/QrcodeControlParams";
import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn, poppins500, raleway, raleway700, useCurrentQrcodeType } from "@/lib/utils";
import { Loader2, LucideDownload } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { StyleTitle } from "@/components/Titles";
import { useAtomValue } from "jotai";
import { urlAtom } from "@/lib/states";
import { downloaderMaps } from "@/lib/downloader";
import { Link } from "@/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useImageService } from "@/lib/image_service";
import { trackEvent } from "@/components/TrackComponents";
import { CommonControlProps, QrbtfModule } from "@/lib/qrbtf_lib/qrcodes/param";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useDraggable } from "react-use-draggable-scroll";
import { SectionTopicTemplateClient } from "@/app/[locale]/SectionTopicTemplateClient";
import { log } from "node:util";
import { SectionStyles } from "@/app/[locale]/SectionStyles";
import { usePathname } from "next/navigation";
export interface QrcodeGeneratorProps<P extends {}>
  extends HTMLAttributes<HTMLDivElement> {
  title: string;
  label?: string;
  subtitle: string;
  qrcodeModule: QrbtfModule<P>;
  params: CommonControlProps<P>[];
  defaultPreset: string;
}

export function QrcodeGenerator<P extends {}>(props: QrcodeGeneratorProps<P>) {
  const t = useTranslations("index.params");
  const pathname = usePathname();
  const url = useAtomValue(urlAtom);
  const { onSubmit, currentReq, resData } = useImageService(
    props.qrcodeModule.type === "api_fetcher"
      ? props.qrcodeModule.fetcher
      : null,
  );
  const { params, defaultPreset } = props;
  const presets = props.qrcodeModule.presets;

  const form = useForm<P>({
    defaultValues: presets[defaultPreset],
  });
  const componentProps = useWatch({ control: form.control }) as P;
  const [preset, setPreset_] = useState(defaultPreset);
  const setPreset = (presetKey: string) => {
    setPreset_(presetKey);
    for (const [key, value] of Object.entries(presets[presetKey])) {
      form.setValue(key as Path<P>, value as PathValue<P, Path<P>>);
    }
  };
  // Download
  // const { data: session } = useSession();
  const qrcodeWrapperRef = useRef<HTMLDivElement | null>(null);
  const currentQrcodeType = useCurrentQrcodeType();
  const renderControls = (item: CommonControlProps<P>) => {
    return (
      <FormField
        control={form.control}
        name={item.name}
        render={({ field }) => {
          switch (item.type) {
            case "number":
              return <ParamNumberControl<P> field={field} {...item} />;
            case "text":
              return <ParamTextControl<P> field={field} {...item} />;
            case "color":
              return <ParamColorControl<P> field={field} {...item} />;
            case "boolean":
              return <ParamBooleanControl<P> field={field} {...item} />;
            case "select":
              return <ParamSelectControl<P> field={field} {...item} />;
            case "image":
              return <ParamImageControl<P> field={field} {...item} />;
          }
        }}
      />
    );
  };
  const [requestAi, setRequestAi] = useState(null);

  const handleRequestAiChange = (data: any) => {
    defaultPreset === "g1" && setRequestAi(data);
  };
  return (
    <div>
      {/* <Container> */}

        {defaultPreset === "g1" && (
          <div className="_sticky _top-24 flex justify-center ">
            <StyleTitle
              title={props.title}
              label={props.label}
              subtitle={props.subtitle}
            />
          </div>
        )}
        {/* {defaultPreset !== "g1" && (<SectionStyles /> )} */}
        <SplitView className="">
          <SplitLeft className="overflow-hidden">
            {defaultPreset === "g1" ? (
              <>
                <SectionTopicTemplateClient
                  selectedCallback={handleRequestAiChange}
                />

                
              </>
            ) : (
              <div>
                <Form {...form}>
                  <form className="not-prose _divide-y">
                    {Object.keys(presets).length > 1 && (
                      <div className="_py-1 flex flex-col items-stretch justify-center min-h-[52px]">
                        <Select value={preset} onValueChange={setPreset}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a fruit" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.keys(presets).map((presetKey) => (
                              <SelectItem key={presetKey} value={presetKey}>
                                {presetKey.toUpperCase()}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                    {params.map((param) => (
                      <div
                        key={param.name}
                        className="_py-1 flex flex-col items-stretch justify-center min-h-[52px]"
                      >
                        {renderControls(param)}
                      </div>
                    ))}
                  </form>
                </Form>
              </div>
            )}
          </SplitLeft>

          <SplitRight>
            <div className="sticky top-24">
              <div className="">
                <Label
                  className={cn(raleway700.className,"flex items-center  justify-between mb-1.5")}
                  htmlFor="output_image"
                >
                  {t("qrcode_output")}
                  {/* qrcode output */}
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Badge
                        className={cn(
                          "rounded-md hover:bg-accent cursor-pointer py-1 bg-gradient-to-t from-cyan-qr/25 to-purple-qr/25  rounded-full",
                        )}
                        variant="outline"
                      >
                        <LucideDownload className="w-4 h-4 mr-1" />
                        {/* download */}
                        {t("download")}
                      </Badge>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {Object.entries(
                        downloaderMaps[props.qrcodeModule.type],
                      ).map(([type, handler]) => (
                        <DropdownMenuItem
                          key={type}
                          onClick={() => {
                            qrcodeWrapperRef.current &&
                              handler({
                                name: currentQrcodeType,
                                wrapper: qrcodeWrapperRef.current,
                                params: componentProps,
                                // userId: session?.user.id
                              });
                          }}
                        >
                          <span className="_font-mono">
                            {type.toLocaleUpperCase()}
                          </span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </Label>
                
                <div className="relative border rounded-[35px] bg-accent/30 w-full overflow-hidden">
                  <AspectRatio ratio={1} />
                  
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                    {/* <QrCodeIcon className="w-12 h-12 opacity-20" /> */}
                  </div>
                  <div
                    ref={qrcodeWrapperRef}
                    className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center _bg-white"
                  >
                    
                    {props.qrcodeModule.type === "svg_renderer" && (
                      <>
                        {props.qrcodeModule.renderer({
                          className: "w-full bg-white",
                          url: url || "https://qrcodeai.amobear.com",
                          ...componentProps,
                        })}
                      </>
                    )}
                    
                    {props.qrcodeModule.type === "api_fetcher" && (
                      <>{props.qrcodeModule.visualizer({ data: resData })}</>
                    )}
                    
                  </div>
                  
                </div>
                {props.qrcodeModule.type === "api_fetcher" && (
                  <div className="text-center">
                    <Button
                      disabled={!!currentReq}
                      className={cn(raleway700.className, "py-4 my-4 text-base  inset-0 bg-gradient-to-b from-cyan-qr to-purple-qr  rounded-full text-white")}
                      variant={"default"}
                      /* @ts-ignore*/
                      onClick={() => onSubmit(requestAi)}
                      // onClick={() => onSubmit(form.getValues())}
                    >
                      {!!currentReq && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      {t("generate")}
                      {/* generate */}
                    </Button>
                  </div>
                )}
               
              </div>
            </div>
          </SplitRight>
        </SplitView>
        <div/>
      {/* </Container> */}
    </div>
  );
}
