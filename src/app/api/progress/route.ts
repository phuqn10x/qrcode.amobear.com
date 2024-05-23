import { http } from "@/lib/network";
import { NextRequest } from "next/server";

async function getProgress(dataProgress: any) {
  const response = await http(
    `https://ai-tree.footballtv.info/internal/progress`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic YWRtaW46YWRtaW4hQDM0Ng==`,
      },
      body: JSON.stringify(dataProgress),
    },
  );
  return response.body;
}

export async function POST(request: NextRequest) {
    // setInterval(async () => {}, 500);
    const data = await getProgress(await request.json());
    return new Response(data);
}
