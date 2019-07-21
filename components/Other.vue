<template>
  <section class="other">
    <h1 class="title">
      Other
    </h1>
    <ul>
      <li>Humans.txt</li>
      <li>what.pm</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Other'
}
</script>

<style lang="scss" scoped>
.other {
  grid-area: other;
}

.title {
  font-weight: normal;
  margin-bottom: 1em;
}
</style>
