<template>
  <section class="contact">
    <h1 class="sectionTitle">
      Get in touch
    </h1>
    <ul>
      <li class="listItem">
        🐦 <a href="https://twitter.com/helenasometimes">Twitter</a>
      </li>
      <li class="listItem">
        🐙 <a href="https://github.com/nienkedekker">GitHub</a>
      </li>
      <li class="listItem">
        📬 <a href="mailto:nienkedekker@gmail.com">E-mail</a>
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
.contact {
  grid-area: contact;
}

a, a:link, a:visited {
  background-color: transparent;
}

ul, li {
	margin: 0;
	padding: 0;
	list-style-type: none;
}
</style>
