List of blogs on the /blog page

<template>
  <section class="blogIndex">
    <blog-header></blog-header>
    <div class="wrapper">
      <h1>Blog</h1>
      <ul v-for="blogItem in blogItems" :key="blogItem.id" class="list">
        <li v-for="item in blogItem" :key="item.id" class="listItem">
          <nuxt-link :key="item.id" :to="`${item.id}`">
            <h2> {{ item.title }}</h2>
            <p class="date">
              {{ item.date }}
            </p>
            <p class="description">
              {{ item.description }}
            </p>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>
v
<script>
import blogPosts from '../../blog/blogposts.js'
import BlogHeader from '../../components/blog/BlogHeader.vue';

export default {
  components: {
    BlogHeader,
  },
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
.blogIndex {
  min-height: 100vh;
  margin: 0 auto;
  max-width: 640px;
}

.wrapper {
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

.listItem {
  margin-bottom: 2em;

  h2 {
    font-weight: 300;
    text-decoration: underline;
  }
}
</style>
