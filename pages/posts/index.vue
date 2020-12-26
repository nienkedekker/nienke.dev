<template>
  <section class="posts">
    <p>
      I sometimes write blog posts, mostly as a reference for myself. Caveat
      lector: these posts are usually not updated after writing.
    </p>
    <ul class="list">
      <li v-for="article in articles" :key="article.id" class="item">
        <nuxt-link :key="article.slug" :to="`/posts/${article.slug}`">
          <h1>{{ article.title }}</h1>
        </nuxt-link>
        <time class="date">
          {{ formattedDate(article.dateISO) }}
        </time>
      </li>
    </ul>
  </section>
</template>

<script>
import dayjs from "dayjs";

export default {
  async asyncData({ $content }) {
    // Fetch all articles, sort them by date created from newest to oldest.
    const articles = await $content()
      .sortBy("dateISO", "desc")
      .fetch();

    return {
      articles
    };
  },
  methods: {
    formattedDate(date) {
      return dayjs(date).format("MMMM DD, YYYY");
    }
  }
};
</script>

<style lang="scss" scoped>
.posts {
  max-width: 640px;
  margin: 0 auto;
  padding: 1em;
  margin: 0 auto;

  @media (min-width: 760px) {
    padding: 5em 1em;
  }

  p {
    padding: 1em;
  }
}

.list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style-type: none;
  margin: 0;
  padding: 0;

  a {
    text-decoration: none;
  }

  h1 {
    font-size: 1em;
    line-height: 1.5;
  }
}

.item {
  padding: 1em;
}

.date {
  font-size: 0.8em;
}
</style>
