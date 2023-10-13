import { type searchParamType } from "@/app/(protect-route)/page";

type methodType = "GET" | "POST" | "PUT" | "DELETE";

interface getDataArg {
  ticket: searchParamType[string];
  url: string;
}
export async function getData({ ticket, url }: getDataArg) {
  if (typeof ticket === "string") {
    const reqConfig: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ticket}`,
      },
    };

    const res = await fetch(url, reqConfig);

    return res.json();
  }

  throw Error("someThing is wrong");
}
