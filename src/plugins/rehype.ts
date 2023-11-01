export default function rehypeWrapSections() {
  return (tree: any) => {
    tree.children = tree.children.map((node: any, i: number) => {
      if (node.tagName === "div") {
        return {
          type: "element",
          tagName: "section",
          properties: { className: i === 0 ? "active-section welcome" : "" },
          children: [node],
        };
      } else {
        return node;
      }
    });
  };
}
