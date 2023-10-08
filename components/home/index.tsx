import { searchParamType } from "@/app/(protect-route)/page";
import { getData } from "./get-info";
import { stringToHtmlConverter } from "./string-to-html-converter";
export async function HomePage({
  searchParams,
}: {
  searchParams: searchParamType;
}) {
  const ticket = searchParams["ticket"];
  const userData = getData(
    ticket,
    "http://localhost:3000/api/test/users/getData"
  );

  const [user] = await Promise.all([userData]);

  const htmlString = user.data.result;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: stringToHtmlConverter(htmlString) }}
    ></div>
  );
}
