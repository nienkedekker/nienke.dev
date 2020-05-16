List of blogs on the /blog page

<template>
  <div>
    <section class="blogIndex">
      <div class="blogIndexWrapper">
        <h1>Blog (work in progress..)</h1>
        <ul
          v-for="blogItem in blogs"
          :key="blogItem.id"
          class="list"
        >
          <li
            :key="blogItem.id"
            class="todo-listItem"
          >
            <nuxt-link
              :key="blogItem.id"
              :to="`/blog/${blogItem.id}`"
            >
              <h2> {{ blogItem.title }}</h2>
              <p class="date">
                {{ blogItem.date }}
              </p>
              <p class="description">
                {{ blogItem.description }}
              </p>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import generatedPosts from '../../generatedPosts';

export default {
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

<style lang="scss" scoped>
	.blogIndex {
		margin: 0 auto;
		max-width: 640px;
	}

	.blogIndexWrapper {
		padding: 50px 0;
		line-height: 1.85em;

		h1 {
			font-weight: normal;
			margin-bottom: 2em;
		}
	}

	.date {
		font-size: .75em;
		margin: .5em 0;
	}
	.description {}

	.list {}

	.todo-listItem {
		margin-bottom: 2em;

		h2 {
			font-weight: 300;
			text-decoration: underline;
		}
	}

	ul, li {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}
</style>
