import { HomePage } from "@/components/home";
import { type Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "home page",
};

export type searchParamType = { [key: string]: string | string[] | undefined };
export default function Home({
  searchParams,
}: {
  searchParams: searchParamType;
}) {
  if (!searchParams["ticket"]) {
    redirect("/login");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomePage searchParams={searchParams} />
    </main>
  );
}
