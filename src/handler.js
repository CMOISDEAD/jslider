import fs from "fs";

// get content of markdown file
export const getMd = (path) => {
  const content = fs.readFileSync(path, "utf8");
  return content;
};

// copy template.css and template.js to dist
export const compileComplements = () => {
  fs.copyFile("./src/templates/template.css", "./dist/style.css", (err) => {
    if (err) throw err;
  });
  fs.copyFile("./src/templates/template.js", "./dist/main.js", (err) => {
    if (err) throw err;
  });
};

// write html file to dist with content of markdown file
export const writeHtml = (content) => {
  fs.readFile("./src/templates/template.html", "utf8", (err, data) => {
    if (err) throw err;
    const html = data.replace("{{content}}", content);
    fs.writeFile("./dist/index.html", html, (err) => {
      if (err) throw err;
    });
  });
};
