<template>
  <section class="other">
    <h1 class="title">
      > Other
    </h1>
    <ul>
      <li class="list-item">
        👩‍💻 <a href="/humans.txt">Humans.txt</a>
      </li>
      <li class="list-item">
        🚧 <a href="https://what.pm">what.pm</a> <span class="label"> forever sideproject ✨</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Other',
};
</script>

<style lang="scss" scoped>
.other {
  grid-area: other;
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

.label {
  font-size: .75em;
  padding: 5px 5px 5px 10px;
  border-radius: 10px;
}

.list-item {
  margin: 5px 0;
}

a, a:link, a:visited {
  background-color: transparent;
}
</style>
