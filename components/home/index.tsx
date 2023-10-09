import { searchParamType } from "@/app/(protect-route)/page";
import {  getData } from "./get-info";
import { stringToHtmlConverter } from "./string-to-html-converter";
export async function HomePage({
  searchParams,
}: {
  searchParams: searchParamType;
}) {
  const ticket = searchParams["ticket"];
  const userData = getData({
    ticket,
    url: "http://shserver.top:8080/test/users/getData",
    method:"GET"
  });

  const data = { message: "Write me a chrome extension code" };
  const codeData = getData({
    ticket,
    url: "http://shserver.top:8080/test/users/getCode",
    data,
    method:"POST"
  });

  const [user, code] = await Promise.all([userData, codeData]);
  console.log(code);

  const htmlString = user.result;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: stringToHtmlConverter(htmlString) }}
    ></div>
  );
}
