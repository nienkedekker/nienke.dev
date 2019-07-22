<template>
  <section class="contact">
    <h1 class="title">
      Get in touch
    </h1>
    <ul>
      <li class="list-item">
        🐦 <a href="https://twitter.com/helenasometimes">Twitter</a>
      </li>
      <li class="list-item">
        🐙 <a href="https://github.com/nienkedekker">GitHub</a>
      </li>
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
  font-weight: 300;
  margin-bottom: 1em;
}

.list-item {
  margin: 5px 0;
}
</style>
