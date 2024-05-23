import { SectionStylesClient } from "@/app/[locale]/SectionStylesClient";
import { NextIntlClientProvider, useMessages } from "next-intl";
import pick from "lodash/pick";
import React from "react";

export function SectionStyles() {
  const messages = useMessages();
  return (
    <NextIntlClientProvider messages={pick(messages, ["index.style"])}>
      <SectionStylesClient />
     </NextIntlClientProvider>
  );
}
