import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import rehypeFormat from "rehype-format";

// custom plugins
import remarkWrapSections from "./plugins/remark.js";
import rehypeWrapSections from "./plugins/rehype.js";

// parse markdown to html
export const parseMd = async (content) => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkWrapSections)
    .use(remarkRehype)
    .use(rehypeWrapSections)
    .use(rehypeKatex)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(content);

  return file.toString();
};
