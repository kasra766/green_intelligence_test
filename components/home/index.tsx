import { searchParamType } from "@/app/(protect-route)/page";
import { getData } from "./get-info";
import { stringToHtmlConverter } from "./string-to-html-converter";
import { BASE_URL } from "@/mock/api";
import { StreamData } from "./stream-data";
export async function HomePage({
  searchParams,
}: {
  searchParams: searchParamType;
}) {
  const ticket = searchParams["ticket"];
  const userData = await getData({
    ticket,
    url: `${BASE_URL}/test/users/getData`,
  });

  const htmlString = userData.result;

  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: stringToHtmlConverter(htmlString) }}
      ></div>
      <StreamData/>
    </>
  );
}
