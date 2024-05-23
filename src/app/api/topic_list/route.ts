import { http } from "@/lib/network";
const ENDPOINT = process.env.LIST_TOPIC_ENDPOINT || "";
async function getTopicList() {
    const response = await http(
      `${ENDPOINT}/2024_aiqr/jsondata/amb_aiqr_data.json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.body;
  }

export async function GET() {
    const data = await getTopicList();
    return new Response(data);
}