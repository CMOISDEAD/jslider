import { compileComplements, getMd, writeHtml } from "./handler.ts";
import { parseMd } from "./parser.ts";
import chokidar from "chokidar";
import minimist from "minimist";

const { f } = minimist(Bun.argv);

const main = async () => {
  if (!f) return console.log("Please specify a file with -f");
  const content = getMd(f);
  const html = await parseMd(content);
  writeHtml(html);
  compileComplements();
};

main();

chokidar.watch(f).on("all", () => {
  console.log("File changed");
  main();
});
