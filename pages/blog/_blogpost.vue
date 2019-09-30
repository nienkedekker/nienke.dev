Single blog post

<template>
  <section class="blogPost">
    <blog-header />
    <div class="blogPostWrapper">
      <h1>{{ title }}</h1>
      <p class="date">
        {{ date }}
      </p>
      <span v-html="html" />
    </div>
    <blog-footer />
  </section>
</template>

<script>
import BlogHeader from '../../components/blog/BlogHeader.vue';
import BlogFooter from '../../components/blog/BlogFooter.vue';

export default {
  components: {
    BlogHeader,
    BlogFooter,
  },
  async asyncData({ params }) {
    const fileContent = await import(`~/blog/posts/${params.blogpost}.md`);
    const attr = fileContent.attributes;
    return {
      name: params.blogpost,
      title: attr.title,
      date: attr.date,
      id: attr.id,
      description: attr.description,
      body: fileContent.body,
      html: fileContent.html,
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

<style lang="scss">
.blogPost {
  max-width: 640px;
  margin: 0 auto;
}

.blogPostWrapper {
  line-height: 1.85em;

  h1, h2, h3 {
    font-weight: 400;
    margin-bottom: .5em;
    margin-top: 1em;
  }

  p {
    margin: 1em 0;
  }
}

.date {
  font-size: .75em;
  margin-bottom: 2em;
}

img {
  width: 100%;
}

code {
  background: #dfdfdf;
  color: #d65a50;
  display: block;
  padding: 1em;
  white-space: pre-wrap;
  border-radius: 1em;
  margin: 1em 0;
}
</style>
