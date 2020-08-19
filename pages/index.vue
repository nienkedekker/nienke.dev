<template>
  <section class="index">
    <div class="indexWrapper">
      <intro />
      <contact />
      <other />
    </div>
  </section>
</template>

<script>
import Contact from '../components/Contact.vue';
import Intro from '../components/Intro.vue';
import Other from '../components/Other.vue';

export default {
  components: {
    Contact,
    Intro,
    Other,
  },
};
</script>

<style lang="scss">
  .index {
    margin: 0 auto;
  }
  .indexWrapper {
    padding: 2em 2.5em;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      "intro"
      "contact"
      "other";
    grid-gap: 2em;
    @media (min-width: 900px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-template-areas: "intro intro intro intro intro" "contact other . . .";
    }
    @media (min-width: 1100px) {
      padding: 4em 5em;
    }
  }
</style>
