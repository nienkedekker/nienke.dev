Single blog post

<template>
  <div class="blogPostContainer">
    <blog-header :title="title" />
    <section class="blogPost">
      <div class="blogPostWrapper">
        <p class="date">
          "{{ title }}" was published on <time :datetime="dateISO">{{ date }}</time>
        </p>
        <hr>
        <span v-html="html" />
      </div>
      <blog-footer />
    </section>
  </div>
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
      dateISO: attr.dateISO,
      id: attr.id,
      description: attr.description,
      body: fileContent.body,
      html: fileContent.html,
    };
  },
  head() {
    return {
      title: `Nienke Dekker - ${this.title}`,
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'author', content: 'Nienke Dekker' },
        { name: 'description', property: 'og:description', content: this.description, hid: 'description' },
        { property: 'og:title', content: this.title },
        { name: 'twitter:description', content: this.description },
      ],
    };
  },
};
</script>

<style lang="scss">

.blogPostContainer {
	padding: 2em 2.5em;
}

.blogPost {
  max-width: 640px;
  margin: 0 auto;
	font-size: .9em;
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

code {
	background: black;
	color: white;
  display: block;
  padding: 1em;
  white-space: pre-wrap;
  border-radius: 1em;
  margin: 1em 0;
}

em {
	background: black;
	color: white;
	padding: .2em;
}
</style>
