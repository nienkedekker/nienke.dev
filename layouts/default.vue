<template>
  <main :class="theme">
    <button class="themeSwitch" @click="switchTheme">
      🌓 <span class="themeSwitchText">switch theme</span>
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
    this.getThemePreference()
  },
  methods: {
    getThemePreference() {
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
  font-family: system-ui, -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Droid Sans", "Helvetica Neue", "Fira Sans", sans-serif;
  display: block;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.25;
  background: black;

  .light {
    background-color: $light_bg-color;
    color: $light_font-color;
  }

  .dark {
    background-color: $dark_bg-color;
    color: $dark_font-color;
  }
}

.themeSwitch {
  position: absolute;
  top: .5em;
  left: .5em;
  border: 0;
  padding: 0;
  margin: 0;
  background-color: transparent;
  font-size: 1.3em;
}

.themeSwitchText {
  font-size: .8rem;
  padding-left: 5px;
  margin-top: 4px;
  display: inline-block;
  vertical-align: text-top;
}

a, a:visited, a:active {
  text-decoration: none;
  color: #d6d6d6;
  background-color: #252f40;
  padding: 3px;
}

a:hover {
  color: white;
  background: #0b1728;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
