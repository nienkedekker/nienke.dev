<template>
  <main :class="theme">
    <no-ssr>
      <header>
        <Music />
        <button class="switch" @click="switchTheme" :aria-label="getButtonText">
          {{ getCorrectEmoji }}
        </button>
      </header>
    </no-ssr>
    <nuxt />
  </main>
</template>
<script>
import NoSSR from "vue-no-ssr";
import Music from "../components/Music.vue";

export default {
  components: {
    Music,
    "no-ssr": NoSSR
  },
  data: () => ({
    theme: "light"
  }),
  computed: {
    getCorrectEmoji() {
      return this.theme === "light" ? "🌒" : "☀️";
    },
    getButtonText() {
      return this.theme === "light"
        ? "switch to dark mode"
        : "switch to light mode";
    }
  },
  mounted() {
    this.getThemePreferenceFromLocalStorage();
  },
  methods: {
    getThemePreferenceFromLocalStorage() {
      const getThemePreference = localStorage.getItem("theme");
      if (getThemePreference) {
        this.theme = getThemePreference;
      }
    },
    switchTheme() {
      switch (this.theme) {
        case "light":
          this.theme = "dark";
          localStorage.setItem("theme", "dark");
          break;
        case "dark":
          this.theme = "light";
          localStorage.setItem("theme", "light");
          break;
        default:
      }
    }
  }
};
</script>
<style lang="scss">
@import url("https://rsms.me/inter/inter.css");

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body,
html {
  font-family: system-ui, -apple-system, system-ui, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Droid Sans", "Helvetica Neue", "Fira Sans", sans-serif;
  display: block;
  font-size: 100%;
  line-height: 1.8;
}

.dark {
  --text-color: rgb(236, 236, 236);
  --background: rgb(12, 12, 12);
  --section-title: #6996a3;
  --link: #ffffff;
  --link-hover: #b1a8ee;
}

.light {
  --text-color: #000;
  --background: #fff;
  --link: #000;
  --link-hover: #4732bd;
}

a,
a:visited,
a:active {
  color: var(--link);
  background-color: var(--link-bg);
}

a:hover {
  color: var(--link-hover);
}

header {
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

main {
  min-height: 100vh;
  background-color: var(--background);
  color: var(--text-color);
}

.switch {
  border: 0;
  font-size: 1.3em;
  background: none;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 16px;

  &:focus {
    outline: 3px solid rgb(150, 150, 150);
  }
}
</style>
