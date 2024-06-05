"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";
import { transitionDampingMd } from "@/lib/animations";
import { cn, poppins, poppins500, useCurrentQrcodeType } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import React, { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { Theme } from "@radix-ui/themes";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { http } from "@/lib/network";
import useSWR from "swr"; // Import useSWR correctly
import { ScanButton } from "@/components/ScanButton";
import { UrlInput } from "@/components/hero/UrlInput";
import { usePathname } from "next/navigation";

interface SectionTopicTemplateClientProps {
  selectedCallback?: (selectedItem: any) => void;
}
export function SectionTopicTemplateClient({
  selectedCallback = () => {},
}: SectionTopicTemplateClientProps) {
  const refTopic =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
  const { events: eventsTopic } = useDraggable(refTopic);

  const refStyle =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
  const { events: eventsStyle } = useDraggable(refStyle);
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    selectedCallback(selectedItem);
  }, [selectedItem]);
  const pathname = usePathname();
  useEffect(() => {
    console.log("pathname", pathname);
    setIsLoading(true);
    setError(null);
    http(`/api/topic_list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
        setSelectedCategory(res.data[0]);
        setSelectedItem(res.data[0].items[0]);
        //   setSelectedItem(null);
        // selectedCallback(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [pathname]);

  const handleCategoryClick = (category: any) => {
    if (selectedCategory == category) {
      // setSelectedCategory(null);
      // setSelectedItem(null);
      // selectedCallback(null);
    } else {
      setSelectedCategory(category);
      setSelectedItem(null);
    }
  };
  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    // callback(item);
  };
  const render = (item: any, index: number) => {
    return (
      <div key={item.id} className="">
        {/* Hiển thị chi tiết mục */}
        <div className="lg:h-[140px] h-[110px]">
          <Theme>
            <div
              className={cn(
                "snap-start sm:ml-0 transition-opacity",
                // @ts-ignore
                selectedItem?.id === item.id ? "" : "dark:opacity-80",
              )}
            >
              <button onClick={() => handleItemClick(item)}>
                <motion.div
                  className={cn(
                    "relative lg:w-[140px] sm:w-[120px] w-[110px] bg-accent/30 rounded-sm overflow-hidden",
                  )}
                  whileTap={{
                    scale: 0.95,
                    opacity: 0.9,
                  }}
                  transition={transitionDampingMd}
                >
                  <AspectRatio ratio={1} />

                  <div className="absolute top-0 left-0 w-full h-full  flex flex-col items-center justify-center "></div>

                  <div className="absolute z-[1] 	p-[3px] top-0 left-0 w-full h-full flex flex-col items-center justify-center rounded-[1px] ">
                    {/* @ts-ignore*/}
                    {/*{selectedCategory?.id === item["id"] && <CircleCheck />}*/}
                    {/* @ts-ignore*/}

                    <Image
                      src={`${"https://openai.amobear.com/" + item?.thumb}`}
                      width={320}
                      height={320}
                      alt=""
                      className="block w-full h-full rounded-lg "
                    />
                  </div>

                  {/* <div
                    className={cn(
                      "absolute top-0 left-0 w-full h-full rounded-[1px]",
                      // @ts-ignore
                      selectedItem?.id === item.id 
                        ? " "
                        : "",
                    )}
                  ></div> */}
                  <div
                    className={cn(
                      "absolute top-0 left-0 w-full h-full rounded-sm ring ring-inset",
                      // @ts-ignore
                      selectedItem?.id === item.id
                        ? " ring-inset bg-gradient-to-r from-cyan-qr to-purple-qr "
                        : " dark:hidden",
                    )}
                  ></div>
                </motion.div>
                {/* <p>style {index + 1}</p> */}
              </button>
              {/* @ts-ignore*/}

              {/* @ts-ignore*/}
              {/*{selectedItem?.id === item.id && <CircleCheck />}*/}
            </div>
          </Theme>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="mt-6 w-full ">
        <div className="flex justify-between">
          <Label
            className={cn(
              poppins500.className,
              "lg:text-2xl  md:text-base sm:text-sm font-medium mb-1.5",
            )}
          >
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
      {isLoading && <p>Loading Data...</p>}
      {error && <div>Error : {error}</div>}
      {!isLoading && !error && (
        <div className="flex flex-col">
          <div className="my-2 relative">
            {data.length != 0 && (
              <div className="my-2">
                <Label
                  className={cn(
                    poppins500.className,
                    "flex justify-between lg:text-2xl md:text-base sm:text-sm font-medium ",
                  )}
                >
                  Choose QR style
                  <span className="align font-normal lg:text-sm text-foreground/50 content-center	">
                    {/* {t("subtitle")} */}
                    Swipe left or right to view more
                  </span>
                </Label>
              </div>
            )}

            <div className="  pl-2 py-3 bg-gradient-to-r  from-white to-purple-qr rounded-lg before:self-center before:block before:z-[1] before:absolute before:h-[100%] rounded-sm before:w-[58px] before:in before:left-[91.6%] before:-inset-1 before:bg-gradient-to-r before:from-black/0 before:to-dark-blue-qr/70 relative ">
              <div
                className=" flex space-x-3 overflow-x-scroll no-scrollbar  "
                {...eventsTopic}
                ref={refTopic}
              >
                <div className="">
                  <div className="flex">
                    {data.map((item, index) => (
                      <div
                        key={`${item["catId"]}-${item["catName"]}`}
                        className="mr-1 "
                      >
                        {/* Hiển thị chi tiết mục */}

                        <div className=" flex flex-row ">
                          {/* @ts-ignore */}
                          <p>{item["id"]}</p>
                          <Theme>
                            {/* @ts-ignore */}

                            <div
                              className={cn(
                                "snap-start sm:ml-0 transition-opacity bg-[#585858] rounded-md ",
                                // @ts-ignore
                                selectedCategory?.catId === item.catId
                                  ? " bg-gradient-to-b from-cyan-qr to-purple-qr "
                                  : "dark:opacity-90",
                              )}
                            >
                              {/* @ts-ignore */}
                              {/* <div className={cn( selectedCategory?.catId === item.catId && "before:block before:h-[40px] before:w-[10px] before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 before:top-2 ")}> */}

                              <button
                                onClick={() => handleCategoryClick(item)}
                                className="rounded-sm relative"
                              >
                                <motion.div
                                  className={cn(
                                    "relative lg:w-[146px] sm:w-[120px] w-[100px]  rounded-sm bg-accent/30 overflow-hidden ",
                                  )}
                                  whileTap={{
                                    scale: 0.95,
                                    opacity: 0.8,
                                  }}
                                  transition={transitionDampingMd}
                                >
                                  <AspectRatio ratio={1} />

                                  <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center "></div>

                                  <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                                    {/* @ts-ignore*/}
                                    {/*{selectedCategory?.id === item["id"] && <CircleCheck />}*/}
                                    {/* @ts-ignore*/}

                                    <Image
                                      /* @ts-ignore*/
                                      src={`${"https://openai.amobear.com/" + item.catThumb}`}
                                      width={180}
                                      height={180}
                                      alt=""
                                      className="block w-full h-full  p-1"
                                    />
                                  </div>

                                  <div
                                    className={cn(
                                      "absolute top-0 left-0 w-full h-full rounded-sm ",
                                      // @ts-ignore
                                      selectedCategory?.catId === item.catId
                                        ? "ring-[5px] "
                                        : "",
                                    )}
                                  ></div>

                                  <div
                                    className={cn(
                                      "absolute top-0 left-0 w-full h-full rounded-sm  ",
                                      // @ts-ignore
                                      selectedCategory?.catId === item.catId
                                        ? "ring-2 ring-foreground "
                                        : "ring-1 ring-border dark:hidden",
                                    )}
                                  ></div>
                                </motion.div>
                               
                                <p className={cn(poppins500.className, "p-1")}>
                                   {/* @ts-ignore */}
                                  {item.catName}
                                </p>
                              </button>
                              {/* </div> */}
                              {/* @ts-ignore*/}
                              {/*{selectedItem?.id === item.id && <CircleCheck />}*/}
                            </div>
                          </Theme>
                          {/* @ts-ignore*/}
                        </div>
                        {/* @ts-ignore*/}
                      </div>

                      // <div key={`${item["id"]}-${item["catName"]}`} className="">
                      //   <div className="flex flex-row">
                      //     <div
                      //       className={cn(
                      //         "snap-start hover:opacity-100  transition-opacity ",
                      //         // @ts-ignore
                      //         selectedCategory?.id === item.id
                      //           ? ""
                      //           : "dark:opacity-70 ",
                      //       )}
                      //     >
                      //       <Button
                      //         className="!hover:opacity-100"
                      //         onClick={() => handleCategoryClick(item)}
                      //       >
                      //         <p>{item["catName"]}</p>
                      //       </Button>
                      //     </div>
                      //   </div>
                      // </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/*<div className="w-6 shrink-0" />*/}
          </div>
          <div className="my-4 mt-8">
            {/* {selectedCategory && (
              <div className="my-2">
                <Label className="flex justify-between text-sm font-medium ">
                  {selectedCategory["category"]}
                  <span className="font-normal text-foreground/50">
                    Swipe left or right to view more
                  </span>
                </Label>
              </div>
            )} */}
           
            <div
             /* @ts-ignore*/
              className={
                selectedCategory &&
                "bg-black/30 rounded-lg px-1 pt-4 after:justify-self-center  after:block before:z-[2] after:rounded-sm after:absolute after:h-[47`  px] after:w-full after:in after:top-[84%] after:-inset-1 after:bg-gradient-to-b after:from-black/0 after:to-dark-blue-qr/70 relative inline-block before:block before:h-[20px] before:w-[10px] before:border-l-transparent before:border-r-transparent before:top-[-25px] before:lg:left-[55px] before:left-[40px]  before:-inset-1 before:border-r-[15px] before:absolute 	before:border-l-solid before:border-r-solid before:border-l-[15px] before:border-b-[25px] before:border-b-[#0000004d] after:z-[1]"
              }
            >
              <div
                className=" flex max-h-[260px]  space-x-3 overflow-y-scroll no-scrollbar 	"
                {...eventsStyle}
                ref={refStyle}
              >
                {selectedCategory && (
                  <div>
                    {/* <div className="arrow-container"> */}
                    {/* @ts-ignore*/}
                    {/* <p>{data.indexOf(selectedCategory)}</p> */}
                    {/* @ts-ignore*/}

                    {/* <div className="bg-black arrow" id="arrow" style={{ left: `${data.indexOf(selectedCategory) * 24}%` }}></div> */}
                    {/* </div> */}

                    <div className="lg:grid-cols-4	 grid grid-cols-3">
                      {/* @ts-ignore*/}

                      {selectedCategory.items?.map((item: any, index: any) =>
                        render(item, index),
                      )}
                    </div>

                    {/* <div className="arrow-container">
                    
      </div> */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
