import { SectionStylesClient } from "@/app/[locale]/SectionStylesClient";
import QrcodeGeneratorWithProvider from "@/components/QrcodeGeneratorWithProvider";
import { Tabs } from "@/components/ui/tabs-aceternity";
import {
  QrbtfRendererG1Props,
  qrbtfModuleG1,
} from "@/lib/qrbtf_lib/qrcodes/g1";
import { useG1Params } from "@/lib/qrbtf_lib/qrcodes/g1_config";
import React, { useContext } from "react";
import SectionQrcodeStandard from "@/app/[locale]/SectionQrcodeStandard";
import { Container } from "@/components/Containers";
export default function SectionQrcode() {
  //   const t = useTranslations("qrcodes.g1");
  
  const { params: paramG1 } = useG1Params();
  // const context = useContext(LayoutContext);

  const TabsList = [
    {
      title: "QR Code AI",
      value: "QR Code AI",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10  text-white md:bg-gradient-to-t md:from-white/0 md:to-[#64A2FF]/10">
          <QrcodeGeneratorWithProvider<QrbtfRendererG1Props>
            title={"Create QR code AI"}
            // label={"R"}
            subtitle={
              "10+ different styles to choose from Creative and AI-powered scannability to suit your style for effective marketing, branding and more"
            }
            qrcodeModule={qrbtfModuleG1}
            params={paramG1}
            defaultPreset="g1"
          />
        </div>
      ),
    },
    {
      title: "QR Code Basic",
      value: "QR Code Basic",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10  text-white md:bg-gradient-to-t md:from-white/0 md:to-[#64A2FF]/10">
          <SectionQrcodeStandard
            title={"Create QR Code Standard"}
            // label={"R"}
            subtitle={
              "1000+ different styles to choose from Creative and easy to scan to suit your style for effective marketing, branding and more"
            }
          />
        </div>
      ),
    },
  ];
  return (
    <div>
      <Container>
        <div className="h-[1680px] lg:h-[1250px]  [perspective:1000px] relative b flex flex-col  mx-auto w-full  items-start justify-start ">
          <Tabs tabs={TabsList} />
        </div>
      </Container>
    </div>
  );
}
