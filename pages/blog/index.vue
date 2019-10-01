List of blogs on the /blog page

<template>
  <div>
    <blog-header />
    <section class="blogIndex">
      <div class="blogIndexWrapper">
        <h1>Blog</h1>
        <ul
          v-for="blogItem in blogItems"
          :key="blogItem.id"
          class="list"
        >
          <li
            v-for="item in blogItem"
            :key="item.id"
            class="listItem"
          >
            <nuxt-link
              :key="item.id"
              :to="`${item.id}`"
            >
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
  </div>
</template>
v
<script>
import BlogHeader from '../../components/blog/BlogHeader.vue';
import generatePosts from '../../generatedPosts';

export default {
  components: {
    BlogHeader,
  },
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
.blogIndex {
  /*min-height: 100vh;*/
  margin: 0 auto;
  max-width: 640px;
}

.blogIndexWrapper {
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
