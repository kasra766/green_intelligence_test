"use client";
import { useFetcher } from "./usefetcher";

export function StreamData() {
  const data = useFetcher();

  return (
    <div>
      {data.map((i) => (
        <div key={i}>{JSON.stringify(i)}</div>
      ))}
    </div>
  );
}
