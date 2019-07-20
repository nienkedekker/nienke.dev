<template>
  <div class="container small">
    {{ title }}
    {{ description }}
  </div>
</template>

<script>
export default {
  async asyncData({ params, app }) {
    const fileContent = await import(`~/contents/posts/blog/${params.slug}.md`)
    const attr = fileContent.attributes
    return {
      name: params.slug,
      title: attr.title,
      year: attr.year,
      id: attr.id,
      description: attr.description
    }
  }
}
</script>

<style lang="scss">

</style>
