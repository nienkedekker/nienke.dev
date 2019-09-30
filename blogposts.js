// export default [
//   '2018-a-post-mortem',
//   'designing-and-developing-for-users-with-autism',
//   'getting-started-with-mongoose-discriminators-in-express-js',
//   'my-favorite-tools-in-2017',
//   '2017-a-post-mortem',
//   'how-im-using-gulp-to-maintain-my-website',
// ]
const fs = require('fs');
const dirTree = require('directory-tree');
const removeMarkdownExtension = require('remove-markdown-extension');
const directoryTree = [];
const blogPosts = [];
dirTree('./blog/posts', { extensions: /\.md$/ }, null, (item) => {
  directoryTree.push(item.children)
});
directoryTree.forEach(((post) => {
  return blogPosts.push(post.map(i => removeMarkdownExtension(`/blog/${i.name}`)));
}));

const flatSingle = arr => [].concat(...arr);
const flattenedBlogPosts = flatSingle(blogPosts);
fs.writeFile('generatedPosts.js', `export default ${JSON.stringify(flattenedBlogPosts)};`, () => {
  console.log('retrieved blog posts!');
});
