import { SectionHero } from "@/app/[locale]/SectionHero";
import { SectionStyles } from "@/app/[locale]/SectionStyles";
import { SectionParams } from "@/app/[locale]/SectionParams";
import { SectionRefs } from "@/app/[locale]/SectionRefs";
import { SectionQA } from "@/app/[locale]/SectionQA";
import { SectionTeam } from "@/app/[locale]/SectionTeam";
import { SectionChangelog } from "@/app/[locale]/SectionChangelog";
import { SectionSponsor } from "@/app/[locale]/SectionSponsor";
import { Button } from "@/components/ui/button";
import {
  Container,
  SplitLeft,
  SplitRight,
  SplitView,
} from "@/components/Containers";
// import { SectionStatus } from "@/app/[locale]/SectionStatus";
import { cn } from "@/lib/utils";
import Link from "next/link";

import React, { createContext } from "react";
import { LayoutProvider } from "@/components/LayoutProvider";
import SectionQrcode from "@/app/[locale]/SectionQrcode";
import { usePathname } from "next/navigation";


export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  
  return (
    <div>
      <SectionHero />
         <LayoutProvider value={children}> 
              <SectionQrcode/>
        </LayoutProvider> 
      <Container>
        
        {/*<SplitView className="gap-x-9 gap-y-12 mt-12">*/}
        {/*  <SplitLeft className="flex flex-col gap-12">*/}
        {/*    <SectionStatus />*/}
        {/*    <SectionQA />*/}
        {/*    <SectionRefs />*/}
        {/*    <SectionTeam />*/}
        {/*    <SectionSponsor />*/}
        {/*  </SplitLeft>*/}
        {/*  <SplitRight>*/}
        {/*    <SectionChangelog />*/}
        {/*  </SplitRight>*/}
        {/*</SplitView>*/}
      </Container>
    </div>
  );
}
