<template>
  <main :class="theme">
    <button @click="switchTheme">
      🌓
    </button>
    <nuxt />
  </main>
</template>
<script>
export default {
  data: () => {
    return {
      theme: 'dark'
    }
  },
  mounted() {
    this.setThemePreference()
  },
  methods: {
    setThemePreference() {
      const getThemePreference = localStorage.getItem('theme');
      if (getThemePreference) {
        this.theme = getThemePreference;
      }
    },
    switchTheme() {
      switch (this.theme) {
        case 'light':
          this.theme = 'dark';
          localStorage.setItem('theme', 'dark');
          break;
        case 'dark':
          this.theme = 'light';
          localStorage.setItem('theme', 'light');
          break;
        default:
      }
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
