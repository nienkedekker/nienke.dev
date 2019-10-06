<template>
  <section class="contact">
    <h1 class="sectionTitle">
      > Get in touch
    </h1>
    <ul>
      <li class="listItem">
        🐦&nbsp;&nbsp;&nbsp;<a href="https://twitter.com/helenasometimes">Twitter</a>
      </li>
      <li class="listItem">
        🐙&nbsp;&nbsp;&nbsp;<a href="https://github.com/nienkedekker">GitHub</a>
      </li>
      <li class="listItem">
        📬&nbsp;&nbsp;&nbsp;<a href="mailto:nienkedekker@gmail.com">E-mail</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style lang="scss" scoped>
	@import url('https://fonts.googleapis.com/css?family=Fira+Mono&display=swap');
.contact {
  grid-area: contact;
}

a, a:link, a:visited {
  background-color: transparent;
}
</style>
