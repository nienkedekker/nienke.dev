List of blogs with links on the homepage

<template>
  <section class="blogposts">
    <h1>Blog Posts</h1>
    <div v-for="blogItem in blogItems" :key="blogItem.id">
      <div v-for="item in blogItem" :key="item.id">
        <nuxt-link :key="item.id" :to="`blog/${item.id}`">
          {{ item.title }} - {{ item.date }} <br>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
v
<script>
import blogPosts from '~/contents/blogposts.js/'

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
      const markdownContents = await import(`~/contents/posts/blog/${name}.md`);
      return markdownContents.attributes;
    },
  }
}
</script>

<style lang="scss" scoped>
.blogposts {
  grid-area: blogposts;
}
</style>
