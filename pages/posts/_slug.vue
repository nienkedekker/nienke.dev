<template>
  <article>
    <h1>{{ article.title }}</h1>
    <time class="date">{{ formattedDate(article.dateISO) }}</time>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
import dayjs from "dayjs";

export default {
  async asyncData({ $content, params }) {
    const article = await $content(params.slug).fetch();

    return { article };
  },

  methods: {
    formattedDate(date) {
      return dayjs(date).format("MMMM DD, YYYY");
    }
  }
};
</script>

<style lang="scss">
article {
  max-width: 720px;
  margin: 0 auto;
  padding: 1em;
  margin: 0 auto;

  @media (min-width: 760px) {
    padding: 5em 1em;
  }

  h1 {
    font-size: 1.4em;
    line-height: 1.5;
  }

  h2 {
    font-size: 1.2em;
    margin-top: 2em;
  }

  h3 {
    font-size: 1em;
  }

  .date {
    font-size: 0.8em;
  }

  p {
    margin: 1em 0 1em 0;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  ol {
    list-style: none;
    counter-reset: custom-counter;
    padding-left: 3em;
  }

  ol li {
    counter-increment: custom-counter;
    position: relative;
  }

  ol li::before {
    content: counter(custom-counter) ". ";
    font-weight: 500;
    position: absolute;
    left: calc(-1 * 1.8em);
  }

  li {
    padding: 0 0 0.3em 0;
  }

  code {
    font-size: 1em;
  }

  blockquote {
    border-left: 2px solid rgb(199, 199, 199);
    padding-left: 1.5em;
  }
}

img {
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
