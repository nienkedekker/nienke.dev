<template>
  <div class="index">
    <div class="wrapper">
      <Intro />
      <Music />
      <BlogPosts />
      <Contact />
      <Other />
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
    "intro intro intro intro"
    "music . . ."
    "blogposts contact other .";
}
</style>
