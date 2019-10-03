<template>
  <section class="contact">
    <h1 class="title">
      > Get in touch
    </h1>
    <ul>
      <li class="list-item">
        🐦&nbsp;&nbsp;&nbsp;<a href="https://twitter.com/helenasometimes">Twitter</a>
      </li>
      <li class="list-item">
        🐙&nbsp;&nbsp;&nbsp;<a href="https://github.com/nienkedekker">GitHub</a>
      </li>
      <li class="list-item">
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

.title {
  margin-bottom: 1em;
	font-family: 'Fira Mono', monospace;
	text-transform: uppercase;
	font-size: .75em;
	letter-spacing: 1px;
	font-weight: normal;
	color: #cba7cb;
}

.list-item {
  margin: 5px 0;
	line-height: 2;
	font-size: .9em;
}

a, a:link, a:visited {
  background-color: transparent;
}
</style>
