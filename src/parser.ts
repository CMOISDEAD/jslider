import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

// custom plugins
import remarkWrapSections from "./plugins/remark.ts";
import rehypeWrapSections from "./plugins/rehype.ts";

// parse markdown to html
export const parseMd = async (content: any) => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkWrapSections)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "poimandres",
    })
    .use(rehypeWrapSections)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(content);

  return file.toString();
};
