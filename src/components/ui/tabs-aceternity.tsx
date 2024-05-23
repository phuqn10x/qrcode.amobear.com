"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn, raleway700, scrollToElement, useCurrentQrcodeType } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation'

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);
  const [title, setTitle] = useState("");
  const pathname = usePathname() 
  const router = useRouter()
  const [currentQrcodeTypes,setcurrentQrcodeTypes] = useState("")
  const [checkButtonClick,setcheckButtonClick] = useState(false)
  const currentTab = useCurrentQrcodeType()
 
  const moveSelectedTabToTop = (idx: number,title : string = "",checkButton? : any) => {
    if(checkButton){
      setcheckButtonClick(true)
    }
    setTitle(title)
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };
  const [hovering, setHovering] = useState(false);
  useEffect(() => {
    title === "QR Code AI" ? router.push("/",{ scroll: false }) : "" ;
    title === "QR Code Basic" ? (currentQrcodeTypes ? router.push(`/standard/${currentQrcodeTypes}`,{ scroll: false }) :  router.push("/standard/a1",{ scroll: false })) : "";
    setcurrentQrcodeTypes(currentTab)
  },[active])
  useEffect(() => {
    // console.log(currentTab);
    !checkButtonClick && (pathname.includes(currentTab) ?  (moveSelectedTabToTop(1), scrollToElement('placeholder-qrcode'),setcheckButtonClick(true)) : "") 
  },[pathname])
  return (
    <>
      <div
          id="placeholder-qrcode"
        className={cn(
          raleway700.className,"flex flex-row z-20 md:text-lg  text-sm items-center justify-center [perspective:1000px] relative overflow-hidden sm:overflow-hidden no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
         <div className= "p-2 bg-gray-200 rounded-[2.5rem] dark:bg-black">
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={(e) => {
              moveSelectedTabToTop(idx,tab.title,e);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-10 py-4 rounded-full", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                    "absolute inset-0 bg-gradient-to-b	 from-cyan-qr to-purple-qr  rounded-full z-[-1]",
                  activeTabClassName
                )}
              />
            )}
            
            <span className="relative block text-black dark:text-white lg:text-lg text-[12px]">
              {tab.title}
            </span>
          
            
          </button>
        ))}
        </div>
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        // className={cn("mt-32", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full md:translate-y-[-4%]">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            // scale: 1 - idx * 0.1,
            top:  idx * -50 ,
            zIndex: -idx,
            opacity: idx < 1 ? 1 : 0,
          }}
          animate={{
            // y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn( "w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
