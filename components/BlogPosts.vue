<template>
  <section class="blogposts">
    Blogposts
    <div v-for="blog in blogs" :key="blog.id">
      <div v-for="item in blog" :key="item.id">
        {{ item.title }}
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
      blogs: []
    };
  },
  mounted() {
    this.getBlogPosts();
  },
  methods: {
    async getBlogPosts() {
      return Promise.all(blogPosts.map(blog => this.mapOverBlogs(blog)))
        .then((response) => {
          console.log(typeof response);
          return this.blogs.push(response);
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
