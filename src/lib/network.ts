import { toast } from "sonner";

export const http: typeof fetch = async (input, init) => {
  // console.log("input", input);

  const res = await fetch(input, init);
  if (!res.ok) {
    const body = await res.json();
    const msg = body['detail'] ? body["detail"] : body["error"];
   
    toast.error(msg);
    throw Error(msg);
  }
  return res;
};
