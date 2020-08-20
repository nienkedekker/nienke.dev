<template>
  <section class="other">
    <h1 class="sectionTitle">
      Other
    </h1>
    <ul>
      <li class="listItem">
        📠 <nuxt-link to="/posts">
          Horrifically outdated blog
        </nuxt-link>
      </li>
      <li class="listItem">
        📖 <nuxt-link to="/books">
          Book recs
        </nuxt-link>
      </li>
      <li class="listItem">
        🚧  <a href="https://what.pm">What.pm</a> <span class="label"> forever sideproject ✨</span>
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
  font-size: .8em;
  padding: 5px 5px 5px 10px;
	margin-left: 2px;
  border-radius: 10px;
	background: black;
	color: white;
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
