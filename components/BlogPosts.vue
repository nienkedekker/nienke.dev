List of blogs with links on the homepage

<template>
  <section class="blogPosts">
    <h1 class="sectionTitle">
      > Blog Posts
    </h1>
    <ul
      v-for="blogItem in blogItems"
      :key="blogItem.id"
      class="blogItems"
    >
      <nuxt-link
        v-for="item in blogItem"
        :key="item.id"
        class="blogItem"
        :to="`blog/${item.id}`"
      >
        <li>
          <h2 class="blogTitle">
            {{ item.title }}
          </h2>
          <p class="blogDate">
            {{ item.date }}
          </p>
        </li>
      </nuxt-link>
    </ul>
  </section>
</template>
v
<script>
import generatedPosts from '../generatedPosts';

export default {
  data: () => ({
      blogItems: [],
    }),
  mounted() {
    this.getBlogPosts();
  },
  methods: {
    async getBlogPosts() {
      return Promise.all(generatedPosts.map((blog) => this.mapOverBlogs(blog)))
        .then((response) => {
          this.sortDates(response);
          this.blogItems.push(response);
				});
    },
    async mapOverBlogs(name) {
      const markdownContents = await import(`~/blog/posts/${name}.md`);
      return markdownContents.attributes;
    },
		async sortDates(response) {
      response.sort((a, b) => {
        // eslint-disable-next-line no-param-reassign
        a = new Date(a.dateISO);
				// eslint-disable-next-line no-param-reassign
        b = new Date(b.dateISO);
        // eslint-disable-next-line no-param-reassign,no-nested-ternary
        return a > b ? -1 : a < b ? 1 : 0;
      });
    },
},
};
</script>

<style lang="scss" scoped>
.blogPosts {
  grid-area: blogposts;
}

.blogItem {
	display: block;
	background-image: none;
	line-height: 2;
	font-size: .9em;
	margin-left: 1em;

	li {
		list-style: circle;
	}
}

.blogTitle {
	display: inline;
	font-weight: normal;
	line-height: 2;
	font-size: .9em;
}

.blogDate {
  font-size: .75em;
	display: inline;
}

a, a:link, a:visited {
  background-color: transparent;
}
</style>
