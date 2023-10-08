export function stringToHtmlConverter(htmlString: any) {
  const bTagReg = /<b>(.*?)<\/b>/;
  const h2TagReg = /<h2>(.*?)<\/h2>/;
  const iTagReg = /<i>(.*?)<\/i>/;
  const bTag = htmlString.match(bTagReg);
  const hTag = htmlString.match(h2TagReg);
  const iTag = htmlString.match(iTagReg);
  const newHTag = hTag[0].replace(h2TagReg, `<h2><xmp>${iTag[0]}</xmp></h2>`);

  return `${bTag[0]}${newHTag}`;
}
