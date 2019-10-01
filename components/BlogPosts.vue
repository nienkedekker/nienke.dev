List of blogs with links on the homepage

<template>
  <section class="blogPosts">
    <h1 class="title">
      > Blog Posts
    </h1>
    <div
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
        <div class="itemTitle">
          {{ item.title }}
        </div>
        <span class="itemDate">
          {{ item.date }}
        </span>
      </nuxt-link>
    </div>
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
  margin-bottom: 2em;
	background-image: none;
}

.itemTitle {
	margin-bottom: .35em;
}
.itemDate {
  font-size: .75em;
	color: #bebef4;
}

a, a:link, a:visited {
  background-color: transparent;
}
</style>
