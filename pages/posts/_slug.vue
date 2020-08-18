<template>
  <article>
    <nuxt-content :document="article" class="blogPost"/>
  </article>
</template>


<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content(params.slug).fetch()

      return { article }
    }
  }
</script>

<style lang="scss">
  article {
    padding: 2em;
  }

  .blogPost {
    max-width: 640px;
    margin: 0 auto;
    font-size: 1em;
    font-weight: 400;
  }
  .blogPostWrapper {
    line-height: 1.85em;
    h1, h2, h3 {
      font-weight: 400;
      margin-bottom: .5em;
      margin-top: 2em;
      font-family: 'Inter', sans-serif;
    }
    p {
      margin: 1em 0;
    }
  }
  .date {
    font-size: .85em;
    margin-bottom: 2em;
  }
  img {
    width: 100%;
  }
</style>
