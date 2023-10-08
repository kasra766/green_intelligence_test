export async function GET() {
  const data = {
    result: "<b>Bold Text</b><h2><i>h2 Italic Text</i></h2>",
  };
  return Response.json({ data });
}
