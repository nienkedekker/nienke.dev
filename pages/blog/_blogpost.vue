Single blog post

<template>
  <div>
    <h1>{{ title }}</h1>
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
  }
}
</script>

<style lang="scss">

</style>
