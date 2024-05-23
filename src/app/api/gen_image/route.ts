// https://developer.mozilla.org/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
import { getServerSession } from "next-auth";
// import auth, { UserTier } from "@/auth";
import QRCode from 'qrcode';
import { NextRequest, NextResponse } from "next/server";

import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
import { getTranslations } from "next-intl/server";
import { http } from "@/lib/network";
// import {
//   getUserQrcodeStat,
//   incGenerationCount,
//   updateLastGenerate,
// } from "../user/stat/service";

function iteratorToStream(iterator: AsyncGenerator<any>, userId: string) {
  if (!iterator) return;
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next();

      if (done) {
        // updateLastGenerate(userId);
        // incGenerationCount(userId);
        controller.close();
      } else {
        controller.enqueue(value);
      }
    },
  });
}

const ENDPOINT = process.env.GEN_AI_ENDPOINT || "";
const KEY = process.env.BASIC_AUTH_USER || "";
const generateQRCode = async (text: string): Promise<string> => {
  const qrCode = await QRCode.toDataURL(text, {
    errorCorrectionLevel: 'H',
    // margin: 1,
  });
  return qrCode.replace(/^data:image\/png;base64,/, '');
};
async function genImage(req: object) {
// Ví dụ sử dụng
  // @ts-ignore
  // const text = req["url"];
  // const base64QRCode = await generateQRCode(text);
  
  // @ts-ignore
  // req["alwayson_scripts"]["controlnet"]['args'][0]['input_image'] = base64QRCode;
  const requestJson = JSON.stringify(req);
  const response = await http(`${ENDPOINT}/sdapi/v1/txt2img`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": KEY,
    },
    keepalive: true,
    body: requestJson
  });
  
  // const dataBuffer = await response.arrayBuffer();

  return response.body;
}

const ratelimit = {
  basic: new Ratelimit({
    redis: kv,
    analytics: true,
    prefix: "ratelimit:basic",
    limiter: Ratelimit.slidingWindow(5, "60s"),
    timeout: 1000, // 1 second
  }),
};

export async function POST(request: NextRequest) {
  // const locale = request.cookies.get("NEXT_LOCALE")?.value || "en";
  // const t = await getTranslations({ locale, namespace: "api.gen_image" });
  //
  // const session = await getServerSession(auth);
  // if (!session || !session.user) {
  //   return NextResponse.json({ error: t("unauthorized") }, { status: 401 });
  // }

  // const user = session.user.id || "";
  // const rlBasic = await ratelimit.basic.limit(user);
  //
  // if (!rlBasic.success) {
  //   return NextResponse.json({ error: t("rate_limit_basic") }, { status: 429 });
  // }
  //
  // const { usage_count: usageCount = 0 } = (await getUserQrcodeStat(user)) || {};
  // if (session.user.tier != UserTier.Alpha && usageCount >= 10) {
  //   return NextResponse.json({ error: t("rate_limit_daily") }, { status: 429 });
  // }


  const data = await genImage(await request.json());

  // Cập nhật last generation và increment count (giả sử các chức năng này tồn tại)
  // updateLastGenerate(userId);
  // incGenerationCount(userId);

  // @ts-ignore
  return new Response(data);
}
