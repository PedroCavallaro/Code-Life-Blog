import showdown from "showdown";

export function markdownConvert(html: string | undefined) {
  const converter = new showdown.Converter();
  const content = converter.makeHtml(html!);

  return content?.toString();
}
