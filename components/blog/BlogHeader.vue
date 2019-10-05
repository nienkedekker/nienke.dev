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
          Homepage
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
		display: flex;
		justify-content: flex-start;
		max-width: 640px;
		margin: 0 auto;
		padding: 3em 0 0 0;
		text-transform: uppercase;
		font-family: 'Fira Mono', monospace;
		font-size: .75em;
		letter-spacing: 1px;
		font-weight: normal;
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
