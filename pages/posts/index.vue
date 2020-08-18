<template>
  <section class="posts">
    <h1>Blog (work in progress..)</h1>
    <ul
      v-for="article in articles"
      :key="article.id"
      class="list"
    >
      <li
        :key="article.id"
        class="todo-listItem"
      >
        <nuxt-link
          :key="article.slug"
          :to="`/posts/${article.slug}`"
        >
          <h2> {{ article.title }}</h2>
          <p class="date">
            {{ formattedDate(article.dateISO) }}
          </p>
          <p class="description">
            {{ article.description }}
          </p>
        </nuxt-link>
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
    max-width: 640px;
    margin: 0 auto;
  }
</style>
