no-ssr is used for blog posts and music, which can only be loaded when JS is enabled.

<template>
  <div class="index">
    <div class="indexWrapper">
      <intro />
      <no-ssr>
        <music />
      </no-ssr>
      <no-ssr placeholder="Loading blog posts.. make sure you have JavaScript enabled 👀">
        <blog-posts />
      </no-ssr>
      <contact />
      <other />
    </div>
  </div>
</template>

<script>
import BlogPosts from '../components/BlogPosts';
import Contact from '../components/Contact';
import Intro from '../components/Intro';
import Music from '../components/Music';
import Other from '../components/Other';

export default {
  components: {
    BlogPosts,
    Contact,
    Intro,
    Music,
    Other,
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
