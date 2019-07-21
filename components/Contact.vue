<template>
  <section class="contact">
    <h1 class="title">
      Get in touch
    </h1>
    <ul>
      <li>Twitter</li>
      <li>GitHub</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang="scss" scoped>
.contact {
  grid-area: contact;
}

.title {
  font-weight: normal;
  margin-bottom: 1em;
}
</style>
