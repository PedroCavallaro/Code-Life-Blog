import showdown from "showdown";

function fixUl(contents: Array<string>) {
  const ulToAdd = '<ul className="list-disc">';

  for (let i = 0; i < contents?.length; i++) {
    if (i % 2 === 0) {
      contents[i]?.concat(ulToAdd);
    }
  }

  const fixedContent = contents?.join(" ");

  return fixedContent;
}

export function markdownConvert(html: string | undefined) {
  const converter = new showdown.Converter();
  const content = converter.makeHtml(html!);

  const rightUl = fixUl(content?.split("<ul>"));

  return rightUl;
}
