export function stringToHtmlConverter(htmlString: any) {
  // const bTagReg = /<b>(.*?)<\/b>/;
  // const h2TagReg = /<h2>(.*?)<\/h2>/;
  const iTagReg = /<i>(.*?)<\/i>/g;
  const xmpReg = /<xmp>(.*?)<\/xmp>/;
  // const bTag = htmlString.match(bTagReg);
  // const hTag = htmlString.match(h2TagReg);
  const iTags: string[] = htmlString.match(iTagReg);
  // const newHTag = htmlString.replace(/<i>(.*?)<\/i>/, `<xmp>${iTag[0]}</xmp>`);

  const reverseITags = iTags.reverse();
  const finalResult = reverseITags.reduce((prev, acc, i) => {
   
    if (!xmpReg.test(prev)) {
      const replaceString = htmlString.replace(
        /<i>(.*?)<\/i>/,
        `<xmp>${iTags.at(i - 1)}</xmp>`
      );
      return replaceString;
    }
    const positionOfXmp = prev.lastIndexOf("xmp>") + 4;

    const firstSection = prev.slice(0, positionOfXmp);
    const secondSection = prev
      .slice(positionOfXmp, prev.length)
      .replace(/<i>(.*?)<\/i>/, `<xmp>${iTags.at(i - 1)}</xmp>`);
    const result = `${firstSection}${secondSection}`;
    return result;
  }, htmlString as string);

  console.log(finalResult);

  return `${finalResult}`;
}
