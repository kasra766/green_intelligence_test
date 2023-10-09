"use client";

import { fetchEventSource } from "@microsoft/fetch-event-source";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/mock/api";

export function useFetcher() {
  const [data, setData] = useState<any[]>([]);

  const searchParams = useSearchParams();
  const ticket = searchParams.get("ticket");
  const bodyData = { message: "Write me a chrome extension code" };
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchData = async () => {
      await fetchEventSource(`${BASE_URL}/test/users/getCode`, {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
          Accept: "text/event-stream",
          Authorization: `Bearer ${ticket}`,
        },
        signal,
        // @ts-ignore
        onopen(res) {
          if (res.ok && res.status === 200) {
            console.log("Connection made ", res);
          } else if (
            res.status >= 400 &&
            res.status < 500 &&
            res.status !== 429
          ) {
            console.log("Client side error ", res);
          }
        },
        onmessage(event) {
          console.log(event.data);
          const parsedData = JSON.parse(event.data);
          setData((data) => [...data, parsedData]);
        },
        onclose() {
          console.log("Connection closed by the server");
        },
        onerror(err) {
          console.log("There was an error from server", err);
        },
      });
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return data;
}
