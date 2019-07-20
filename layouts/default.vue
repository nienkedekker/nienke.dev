<template>
  <main :class="getTheme">
    <nuxt />
  </main>
</template>
<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'dark'
    }
  },
  computed: {
    getTheme() {
      return this.theme
    }
  }
}
</script>
<style lang="scss">
@import '../assets/variables.scss';
body, html {
  font-family: -apple-system, BlinkMacSystemFont, “Segoe UI”, Roboto, Helvetica,
  Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 16px;

  .light {
    background-color: $light_bg-color;
    color: $light_font-color;
  }

  .dark {
    background-color: $dark_bg-color;
    color: $dark_font-color;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
