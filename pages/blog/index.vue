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
            class="todo-listItem"
          >
            <nuxt-link
              :key="item.id"
              :to="`/blog/${item.id}`"
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
import generatedPosts from '../../generatedPosts';

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
      return Promise.all(generatedPosts.map((blog) => this.mapOverBlogs(blog)))
        .then((response) => {
          this.sortDates(response);
          this.blogItems.push(response);
        });
    },
    async mapOverBlogs(name) {
      const markdownContents = await import(`~/blog/posts/${name}.md`);
      return markdownContents.attributes;
    },
    async sortDates(response) {
      response.sort((a, b) => {
        // eslint-disable-next-line no-param-reassign
        a = new Date(a.dateISO);
        // eslint-disable-next-line no-param-reassign
        b = new Date(b.dateISO);
        // eslint-disable-next-line no-param-reassign, no-nested-ternary
        return a > b ? -1 : a < b ? 1 : 0;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.blogIndex {
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

.todo-listItem {
  margin-bottom: 2em;

  h2 {
    font-weight: 300;
    text-decoration: underline;
  }
}
</style>
