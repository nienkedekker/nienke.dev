no-ssr is used for blog posts and music, which can only be loaded when JS is enabled.

<template>
  <div class="index">
    <no-ssr>
      <music />
    </no-ssr>
    <div class="indexWrapper">
      <intro />
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
	padding: 2em 2.5em;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: auto;
	grid-template-areas:
		"intro"
		"blogposts"
		"contact"
		"other";
	grid-gap: 2em;
	@media (min-width: 800px) {
		grid-template-columns: repeat(5, 1fr);
		grid-template-areas: "intro intro intro intro intro" "blogposts blogposts contact other .";
	}
	@media (min-width: 1100px) {
		padding: 4em 5em;
	}
}
</style>
