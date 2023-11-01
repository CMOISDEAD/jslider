export default function wrapSections() {
  return (tree: any) => {
    const sections = [];
    let currentSection = [];

    for (const node of tree.children) {
      if (node.type === "thematicBreak") {
        if (currentSection.length > 0) {
          sections.push(currentSection);
          currentSection = [];
        }
      } else {
        currentSection.push(node);
      }
    }

    if (currentSection.length > 0) {
      sections.push(currentSection);
    }

    tree.children = sections.map((section) => ({
      type: "element",
      tagName: "section",
      properties: {},
      children: section,
    }));
  };
}
