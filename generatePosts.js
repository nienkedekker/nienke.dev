const fs = require("fs");
const dirTree = require("directory-tree");
const removeMarkdownExtension = require("remove-markdown-extension");

const directoryTree = [];
const generatePosts = [];
dirTree("./content", { extensions: /\.md$/ }, null, item => {
  directoryTree.push(item.children);
});
directoryTree.forEach(post =>
  generatePosts.push(post.map(i => removeMarkdownExtension(`${i.name}`)))
);

const flatSingle = arr => [].concat(...arr);
const flattenedBlogPosts = flatSingle(generatePosts);
fs.writeFile(
  "generatedPosts.js",
  `export default ${JSON.stringify(flattenedBlogPosts)};`,
  () => {
    console.log("retrieved posts!");
  }
);
