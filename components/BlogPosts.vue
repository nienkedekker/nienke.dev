List of blogs with links on the homepage

<template>
  <section class="blogposts">
    <h1 class="title">
      Blog Posts
    </h1>
    <ul v-for="blogItem in blogItems" :key="blogItem.id" class="items">
      <li v-for="item in blogItem" :key="item.id" class="item">
        <nuxt-link :key="item.id" :to="`blog/${item.id}`">
          {{ item.title }}
        </nuxt-link>
        <div class="date">
          {{ item.date }}
        </div>
      </li>
    </ul>
  </section>
</template>
v
<script>
import blogPosts from '../blog/blogposts.js'

export default {
  data: () => {
    return {
      blogItems: []
    };
  },
  mounted() {
    this.getBlogPosts();
  },
  methods: {
    async getBlogPosts() {
      return Promise.all(blogPosts.map(blog => this.mapOverBlogs(blog)))
        .then((response) => {
          return this.blogItems.push(response);
        })
    },
    async mapOverBlogs(name) {
      const markdownContents = await import(`~/blog/posts/${name}.md`);
      return markdownContents.attributes;
    },
  }
}
</script>

<style lang="scss" scoped>
.blogposts {
  grid-area: blogposts;
}

.title {
  font-weight: 300;
  margin-bottom: 1em;
}

.item {
  margin-bottom: 1.25em;
}

.date {
  font-size: .75em;
  margin: .5em 0;
}

a, a:link, a:visited {
  background-color: transparent;
}
</style>
