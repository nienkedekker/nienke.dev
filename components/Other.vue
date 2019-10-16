<template>
  <section class="other">
    <h1 class="sectionTitle">
      > Other
    </h1>
    <ul>
      <li class="listItem">
        👩‍💻&nbsp;&nbsp;&nbsp;<a href="/humans.txt">humans.txt</a>
      </li>
      <li class="listItem">
        🚧&nbsp;&nbsp;&nbsp;<a href="https://what.pm">what.pm</a> <span class="label"> forever sideproject ✨</span>
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

.label {
  font-size: .75em;
  padding: 5px 5px 5px 10px;
  border-radius: 10px;
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
