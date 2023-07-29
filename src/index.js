import { compileComplements, getMd, writeHtml } from "./handler.js";
import { parseMd } from "./parser.js";

const main = async () => {
  const content = getMd("./src/test.md");
  const html = await parseMd(content);
  writeHtml(html);
  compileComplements();
};

main();
