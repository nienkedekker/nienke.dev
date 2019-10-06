<template>
  <section class="blogPosts">
    <h1 class="sectionTitle">
      > Blog Posts
    </h1>
    <ul
      v-for="item in blogs"
      :key="item.id"
      class="blogItems"
    >
      <nuxt-link
        :key="item.id"
        class="blogItem"
        :to="`blog/${item.id}`"
      >
        <li>
          <h2 class="blogTitle">
            {{ item.title }}
          </h2>
          <p class="blogDate">
            {{ item.date }}
          </p>
        </li>
      </nuxt-link>
    </ul>
  </section>
</template>
<script>
  export default {
    props: {
      blogs: {
        type: Array,
				default: () => [],
      },
    },
  };
</script>

<style lang="scss" scoped>
	.blogPosts {
		grid-area: blogposts;
	}

	.blogItem {
		display: block;
		background-image: none;
		line-height: 2;
		font-size: .9em;
		margin-left: 1em;

		li {
			list-style: circle;
		}
	}

	.blogTitle {
		display: inline;
		font-weight: normal;
		line-height: 2;
		font-size: .9em;
	}

	.blogDate {
		font-size: .75em;
		display: inline;
	}

	a, a:link, a:visited {
		background-color: transparent;
	}
</style>
