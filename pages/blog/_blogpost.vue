Single blog post

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ date }}</p>
    <span v-html="html" />
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const fileContent = await import(`~/contents/posts/blog/${params.blogpost}.md`);
    const attr = fileContent.attributes;
    return {
      name: params.blogpost,
      title: attr.title,
      date: attr.date,
      id: attr.id,
      description: attr.description,
      body: fileContent.body,
      html: fileContent.html
    }
  },
  head() {
    return {
      title: this.title,
    };
  },
}
</script>

<style lang="scss">
img {
  width: 50%;
}
</style>
