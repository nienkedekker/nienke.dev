<template>
  <div class="index">
    <div class="indexWrapper">
      <intro />
      <blog-posts :blogs="blogs" />
      <contact />
      <other />
    </div>
  </div>
</template>

<script>
import generatedPosts from '../generatedPosts';
import BlogPosts from '../components/BlogPosts';
import Contact from '../components/Contact';
import Intro from '../components/Intro';
import Other from '../components/Other';

export default {
  components: {
    BlogPosts,
    Contact,
    Intro,
    Other,
  },
  async asyncData() {
    // Sort blog posts by their ISO dates, from newest to oldest
    async function sortDates(response) {
      response.sort((a, b) => {
        a = new Date(a.dateISO);
        b = new Date(b.dateISO);
        return a > b ? -1 : a < b ? 1 : 0;
      });
    }

    // Import blog posts' markdown contents
    async function asyncImport(name) {
      const markdownContents = await import(`~/blog/posts/${name}.md`);
      return markdownContents.attributes;
    }

    // Get the array of blog posts, get their mark down contents,
    // sort dates, and return the response
    return Promise.all(generatedPosts.map((blog) => asyncImport(blog)))
      .then((response) => {
        sortDates(response);
        return {
          blogs: response,
        };
      });
  },
};
</script>

<style lang="scss">
.index {
  margin: 0 auto;
  min-height: 100vh;
}

.indexWrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "intro intro intro intro intro"
    "music music music . ."
    "blogposts blogposts contact other .";
  padding: 6em 5em;
  grid-gap: 1em;
}
</style>
