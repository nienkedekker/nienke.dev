List of blogs on the /blog page

<template>
  <section class="blog">
    <div class="wrapper">
      <h1>Blog</h1>
      <ul v-for="blogItem in blogItems" :key="blogItem.id">
        <li v-for="item in blogItem" :key="item.id">
          <nuxt-link :key="item.id" :to="`blog/${item.id}`">
            <h2> {{ item.title }}</h2>
            <p>{{ item.date }}</p>
            <p>{{ item.description }}</p>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>
v
<script>
import blogPosts from '../../blog/blogposts.js'

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
.blog {
  min-height: 100vh;
  margin: 0 auto;
  width: 600px;
}

.wrapper {
  padding: 50px 0;
}
</style>
