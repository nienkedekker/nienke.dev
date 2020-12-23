<template>
  <section class="index">
    <div class="wrapper">
      <Intro />
    </div>
  </section>
</template>

<script>
import Intro from "../components/Intro.vue";

export default {
  components: {
    Intro
  }
};
</script>

<style lang="scss">
.index {
  margin: 0 auto;
}

.wrapper {
  padding: 1em;
  margin: 0 auto;
  max-width: 640px;

  @media (min-width: 760px) {
    padding: 5em 1em;
  }
}
</style>
