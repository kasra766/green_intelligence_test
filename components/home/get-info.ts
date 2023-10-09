import { type searchParamType } from "@/app/(protect-route)/page";

type methodType = "GET" | "POST" | "PUT" | "DELETE";

interface getDataArg {
  ticket: searchParamType[string];
  url: string;
  method: methodType;
  data?: { [key: string]: string };
}
export async function getData({
  ticket,
  url,
  method,
  data,
}: getDataArg) {
  if (typeof ticket === "string") {
    const reqConfig: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ticket}`,
      },
    };

    if (method === "POST" && data) {
      reqConfig["body"] = JSON.stringify(data);
    }
    
    const res = await fetch(url, reqConfig);

    return res.json();
  }

  throw Error("someThing is wrong");
}
