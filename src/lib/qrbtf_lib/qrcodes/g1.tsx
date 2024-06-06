"use client";

import React, { useEffect, useRef, useState } from "react";
import { genImage, ImageResponse } from "@/lib/image_service";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { opacityAnimations, transitionMd } from "@/lib/animations";
import { Loader2 } from "lucide-react";
import { Progress } from "@/components/Progress";
import { toast } from "sonner";
import { trackEvent } from "@/components/TrackComponents";
import { cn, flattenObject, poppins500 } from "@/lib/utils";
import { QrbtfModule } from "./param";
import { G1Presets } from "./g1_config";

import { converBase64ToImage } from "convert-base64-to-image";
import { log } from "console";
import Image from "next/image";
import { http } from "@/lib/network";

interface RenderG1OwnProps {
  task_type: string;
  prompt: string;
  negative_prompt: string;
  seed: number;
  control_strength: number;
  prompt_tuning: boolean;
  image_restoration: boolean;
  restoration_rate: number;
  size: string;
  padding_ratio: number;
  correct_level: string;
  anchor_style: string;
}

export type QrbtfRendererG1Props = RenderG1OwnProps;

async function* fetcher(req: QrbtfRendererG1Props, signal: AbortSignal) {
  //重置进度条
  yield {
    type: "progress",
    value: 0.0,
    status: `Starting`,
  };

  const call = await genImage(req, signal);
  // const call = await fetchProgress();

  // 类似 Python 中的 async for，rep 返回格式为 zod 导出的 ImageResponse，都在 image_service.ts 中定义，必须严格校验返回格式类型，不通过会报错
  for await (const rep of call()) {
    // 返回是 queue，排队中
    yield rep;
  }
}

interface ProgressType {
  value: number;
  eta?: number;
  status: string;
}

function QrbtfVisualizerG1(props: { data: any }) {
  const [progress, setProgress] = useState<ProgressType | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [previousImage, setPreviousImage] = useState<boolean | null>(false);
  const intervalIdRef = useRef<any | null>(null);
  useEffect(() => {
    if (localStorage.getItem("image-base64") ) {
      setImageUrl(localStorage.getItem("image-base64"));
      setPreviousImage(true);
    }else if(!localStorage.getItem("image-base64") && !progress){
      setImageUrl(null);
    }
  });
  useEffect(() => {
    const forceTaskId = localStorage.getItem("forceTaskId")
    if(forceTaskId){
      const dataProgress = {
        id_task: forceTaskId ? forceTaskId : "",
        id_live_preview: -1,
        live_preview: true,
      };
      setProgress(null);
      // setImageUrl("");
      const rep = props.data;
      if (props.data?.status === "Starting") {
        setPreviousImage(false);
        setProgress({
          value: 0.1,
          status: "Starting...",
        });
        // Bắt đầu vòng lặp
        intervalIdRef.current = setInterval(async () => {
          const rep = props.data;
          const response = await http("api/progress", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Basic YWRtaW46YWRtaW4hQDM0Ng==`,
            },
            body: JSON.stringify(dataProgress),
          });
          const data = await response.json();
          if (!rep?.images) {
            if (data.live_preview) {
              setImageUrl(data.live_preview);
            }
          }
          if (data.progress > 0.2) {
            setProgress({
              value: data.progress,
              eta: data.eta,
              status: "Generate starting...",
            });
          }
          if (data.progress > 0.3) {
            setProgress({
              value: data.progress,
              eta: data.eta,
              status: "Inferencing",
            });
          }
          if (data.progress > 0.5) {
            setProgress({
              value: data.progress,
              eta: data.eta,
              status: "Generating...",
            });
          }
          if (data.progress > 0.83) {
            clearInterval(intervalIdRef.current);
            setProgress({
              value: 1,
              eta: data.eta,
              status: "Uploading photo...",
            });
          }
        }, 2000);
      }
  
      if (rep?.images) {
        setProgress(null);
        clearInterval(intervalIdRef.current);
        if (rep?.images.length > 0) {
          const base64 = `data:image/png;base64,${rep?.images[0]}`;
          setImageUrl(base64);
          localStorage.setItem("image-base64", base64);
        }
      }
      // Dọn dẹp interval khi component unmount hoặc khi props.data thay đổi
      return () => clearInterval(intervalIdRef.current);
    }
  }, [props.data]);
  return (
    <div>
      <div
        id="output_image"
        className="aspect-square flex flex-col items-center justify-center "
      >
        {!progress && <PhotoIcon className="w-12 h-12 opacity-10" />}
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center	z-10">
        <AnimatePresence>
          {progress && (
            <motion.div
              key="progress-and-status"
              className="w-full h-full flex flex-col items-center justify-center gap-2 bg-black/50 z-10"
              variants={opacityAnimations}
              transition={transitionMd}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Progress value={progress.value} className="w-[60%] h-2 z-10" />
              <div className={cn(poppins500.className, " text-sm z-10")}>
                {progress.status}{" "}{progress.eta && `( eta : ${progress.eta?.toFixed(0)}s )`}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
       
      <div className="absolute top-0 left-0  w-full h-full z-0">
     
        <AnimatePresence>
          {imageUrl && (
              <motion.div
                key="final-image"
                variants={opacityAnimations}
                transition={transitionMd}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="relative bg-background  w-full h-full  z-0"
              >
                {/* {previousImage && (
                <div className="absolute top-[90%] left-2 z-[1] p-1 px-2 rounded-sm bg-black/60">Your previous generate image</div>
              )}  */}
                <Image
                  width={500}
                  height={500}
                  src={imageUrl}
                  alt=""
                  className="w-full h-full block select-auto z-0 relative"
                />
                {/* <div className="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center text-sm">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <div>Downloading...</div>
              </div> */}
              </motion.div>
         
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export const qrbtfModuleG1: QrbtfModule<QrbtfRendererG1Props> = {
  type: "api_fetcher",
  fetcher: fetcher,
  visualizer: QrbtfVisualizerG1,
  presets: G1Presets,
};
