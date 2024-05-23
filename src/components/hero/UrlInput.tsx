"use client";

import { Input } from "@/components/ui/input";
import { urlAtom } from "@/lib/states";
import { useAtom } from "jotai";

export function UrlInput() {
  const [url, setUrl] = useAtom(urlAtom);
  return (
    <>
      <Input
        placeholder="ex : jane doe, sky dreams..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
    </>
  );
}
