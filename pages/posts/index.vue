<template>
  <section class="posts">
    <ul
      class="list"
    >
      <li
        v-for="article in articles"
        :key="article.id"
        class="item"
      >
        <nuxt-link
          :key="article.slug"
          :to="`/posts/${article.slug}`"
        >
          <h1> {{ article.title }}</h1>
        </nuxt-link>
        <p class="description">
          {{ article.description }}
        </p>
        <time class="date">
          {{ formattedDate(article.dateISO) }}
        </time>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    async asyncData({ $content }) {
      // Fetch all articles, sort them by date created from newest to oldest.
      const articles = await $content().sortBy('dateISO', 'desc').fetch()

      return {
        articles
      }
    },
    methods: {
      formattedDate(date) {
        const newDate = new Date(date);
        return newDate.toDateString()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .posts {
    max-width: 800px;
    margin: 0 auto;
    padding: 3em 1em;


    h1 {
      font-weight: 600;
      font-size: 1.3em;
    }

    time {
      font-size: .8em;
      text-transform: uppercase;
      text-decoration: underline;
    }

    .list {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    .item {
      padding: 1em;
    }

    .description {
    margin: .5em 0;
    }
  }
</style>
