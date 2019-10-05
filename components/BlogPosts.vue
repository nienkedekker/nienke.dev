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
import generatePosts from '../generatedPosts';

export default {
  data: () => ({
      blogItems: [],
    }),
  mounted() {
    this.getBlogPosts();
  },
  methods: {
    async getBlogPosts() {
      return Promise.all(generatePosts.map((blog) => this.mapOverBlogs(blog)))
        .then((response) => this.blogItems.push(response));
    },
    async mapOverBlogs(name) {
      const markdownContents = await import(`~/blog/posts/${name}.md`);
      return markdownContents.attributes;
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
