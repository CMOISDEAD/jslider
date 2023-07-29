export default function rehypeWrapSections() {
  return (tree) => {
    tree.children = tree.children.map((node, i) => {
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
