const fs = require('fs');
const dirTree = require('directory-tree');
const removeMarkdownExtension = require('remove-markdown-extension');

const directoryTree = [];
const blogPosts = [];
dirTree('./blog/posts', { extensions: /\.md$/ }, null, (item) => {
  directoryTree.push(item.children);
});
directoryTree.forEach(((post) => blogPosts.push(post.map((i) => removeMarkdownExtension(`${i.name}`)))));

const flatSingle = (arr) => [].concat(...arr);
const flattenedBlogPosts = flatSingle(blogPosts);
fs.writeFile('generatedPosts.js', `export default ${JSON.stringify(flattenedBlogPosts)};`, () => {
  console.log('retrieved blog posts!');
});
