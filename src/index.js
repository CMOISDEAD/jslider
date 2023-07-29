import fs from "fs";
import { unified } from "unified";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkWrapSections from "./plugins/remark.js";
import rehypeWrapSections from "./plugins/rehype.js";

const showAst = async (markdownString) => {
  const ast = await remark().parse(markdownString);
  console.log(JSON.stringify(ast, null, 2));
};

const parseMd = async (content) => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkWrapSections)
    .use(remarkRehype)
    .use(rehypeWrapSections)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(content);

  return file.toString();
};

const writeHtml = (content) => {
  fs.readFile("./src/templates/template.html", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const html = data.replace("{{content}}", content);
    fs.writeFile("./dist/index.html", html, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  });
};

const main = async () => {
  const content = fs.readFileSync("./src/test.md", "utf8");
  const html = await parseMd(content);
  writeHtml(html);
};

main();
