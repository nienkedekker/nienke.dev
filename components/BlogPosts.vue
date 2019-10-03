List of blogs with links on the homepage

<template>
  <section class="blogPosts">
    <h1 class="title">
      > Blog Posts
    </h1>
    <ul
      v-for="blogItem in blogItems"
      :key="blogItem.id"
      class="items"
    >
      <nuxt-link
        v-for="item in blogItem"
        :key="item.id"
        class="item"
        :to="`blog/${item.id}`"
      >
        <li>
          <h2 class="itemTitle">
            {{ item.title }}
          </h2>
          <p class="itemDate">
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

.title {
	margin-bottom: 1em;
	font-family: 'Fira Mono', monospace;
	text-transform: uppercase;
	font-size: .75em;
	letter-spacing: 1px;
	font-weight: normal;
	color: #cba7cb;
}

.item {
	display: block;
	background-image: none;
	line-height: 2;
	font-size: .9em;
	margin-left: 1em;
	border-bottom: 1px solid #3b375e;

	li {
		list-style: circle;
	}
}

.itemTitle {
	display: inline;
	font-weight: normal;
	line-height: 2;
	font-size: .9em;
}

.itemDate {
  font-size: .75em;
	color: #dddff4;
	display: inline;
}

a, a:link, a:visited {
  background-color: transparent;
}
</style>
