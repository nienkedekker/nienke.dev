<template>
  <section class="index">
    <div class="indexWrapper">
      <intro />
      <blog-posts :blogs="blogs" />
      <contact />
      <other />
    </div>
  </section>
</template>

<script>
import generatedPosts from '../generatedPosts';
import BlogPosts from '../components/BlogPosts.vue';
import Contact from '../components/Contact.vue';
import Intro from '../components/Intro.vue';
import Other from '../components/Other.vue';

export default {
	components: {
		BlogPosts,
		Contact,
		Intro,
		Other,
	},
	data() {
		return {
			blogs: [],
		};
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
    @media (min-width: 900px) {
      grid-template-columns: repeat(5, 1fr);
      grid-template-areas: "intro intro intro intro intro" "blogposts blogposts contact other .";
    }
    @media (min-width: 1100px) {
      padding: 4em 5em;
    }
  }
</style>
