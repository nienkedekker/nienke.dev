List of blogs on the /blog page

<template>
  <section class="blog">
    <h1>Blog</h1>
    <ul v-for="blogItem in blogItems" :key="blogItem.id">
      <li v-for="item in blogItem" :key="item.id">
        <nuxt-link :key="item.id" :to="`blog/${item.id}`">
          {{ item.title }} - {{ item.date }} - {{ item.description }}
        </nuxt-link>
      </li>
    </ul>
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
