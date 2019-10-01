<template>
  <nav class="navigation">
    <ul class="navigationList">
      <li class="navigationListItem">
        <nuxt-link to="/blog">
          All Posts
        </nuxt-link>
      </li>
      <li class="navigationListItem">
        <nuxt-link to="/">
          About
        </nuxt-link>
      </li>
      <li class="navigationListItem">
        <a href="/">Twitter</a>
      </li>
      <li class="navigationListItem">
        <a href="/">GitHub</a>
      </li>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
  .navigation {
		max-width: 640px;
		margin: 0 auto;
		padding-top: 2em;
		padding-bottom: 2em;
  }

	.navigationList {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	.navigationListItem {
		margin: 0;
		padding: 0 1em 0 0;
		display: inline;
	}
</style>
