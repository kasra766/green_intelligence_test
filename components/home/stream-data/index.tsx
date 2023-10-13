"use client";
import { useFetcher } from "./usefetcher";

export function StreamData() {
  const data = useFetcher();

  if (data.length === 0) return <p>fetching...</p>;
  return <div>{data.reduce((prev, acc) => prev.concat(acc.content), "")}</div>;
}
