import { type searchParamType } from "@/app/(protect-route)/page";

type methodType = "GET" | "POST" | "PUT" | "DELETE";

export async function getData(
  ticket: searchParamType[string],
  url: string,
  method: methodType = "GET"
) {
  if (typeof ticket === "string") {
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ticket,
      },
    });

    return res.json();
  }

  throw Error("someThing is wrong");
}
