"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs-aceternity";
type Tab = {
    title: string;
    value: string;
    content?: string | React.ReactNode | any;
};
export function SectionTabs(tabs : any) {
  const TabsList = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          {/* <p>Product Tab</p> */}
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          {/* <p>Services tab</p> */}
          <DummyContent />
        </div>
      ),
    }
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
       <Tabs tabs={tabs} /> 
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
    <p>test</p>
    </>
  );
};
