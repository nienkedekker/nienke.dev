<template>
  <div class="index">
    <div class="wrapper">
      <intro />
      <no-ssr placeholder="Loading..">
        <music />
      </no-ssr>
      <no-ssr placeholder="Loading..">
        <blog-posts />
      </no-ssr>
      <contact />
      <other />
    </div>
  </div>
</template>

<script>
import BlogPosts from '../components/BlogPosts'
import Contact from '../components/Contact'
import Intro from '../components/Intro'
import Music from '../components/Music'
import Other from '../components/Other'

export default {
  components: {
    BlogPosts,
    Contact,
    Intro,
    Music,
    Other
  },
}
</script>

<style lang="scss">
.index {
  margin: 0 auto;
  min-height: 100vh;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "switch . . ."
    "intro intro intro intro"
    "music music music ."
    "blogposts contact other .";
  padding: 8em 5em;
}
</style>
