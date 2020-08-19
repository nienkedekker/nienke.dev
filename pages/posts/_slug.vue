<template>
  <article>
    <h1>{{ article.title }}</h1>
    <time>{{ formattedDate(article.dateISO) }}</time>
    <nuxt-content :document="article" />
  </article>
</template>


<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content(params.slug).fetch()

      return { article }
    },

    methods: {
      formattedDate(date) {
        const newDate = new Date(date);
        return newDate.toDateString()
      }
    }
  }
</script>

<style lang="scss">

  article {
    max-width: 50em;
    margin: 0 auto;
    padding: 3em 0;

    h1 {
      line-height: 1.4;
      font-weight: 600;
    }

    time {
      text-transform: uppercase;
    }

    p, ul, ol {
      line-height: 1.85;
      margin: 1.5em 0;
    }

    code {
      font-size: 1em;
    }
  }

  img {
    width: 100%;
  }
</style>
