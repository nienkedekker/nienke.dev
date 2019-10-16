<template>
  <nav class="navigation">
    <ul class="navigationList">
      <li class="navigationListItem">
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      >
      <li class="navigationListItem">
        <nuxt-link to="/blog">Blog</nuxt-link>
      </li>
      >
      <li class="navigationListItem">
        {{ title }}
      </li>
    </ul>
  </nav>
</template>
<script>
	export default {
		props: {
			title: {
				type: String,
				required: true,
			},
		},
	};
</script>
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
		list-style-type: circle;
		margin: 0;
		padding: 0;
	}

	.navigationListItem {
		margin: 0;
		padding: 0;
		display: inline;
	}
</style>
