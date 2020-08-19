<template>
  <main
    :class="theme"
    class="main"
  >
    <no-ssr>
      <header>
        <music />
        <button
          class="themeSwitch"
          @click="switchTheme"
        >
          {{ getCorrectEmoji }} <span class="themeSwitchText"> {{ getButtonText }} </span>
        </button>
      </header>
    </no-ssr>
    <nuxt />
  </main>
</template>
<script>
import NoSSR from 'vue-no-ssr';
import Music from '../components/Music.vue';

export default {
  components: {
    Music,
    'no-ssr': NoSSR,
  },
  data: () => ({
    theme: 'dark',
  }),
  computed: {
    getCorrectEmoji() {
      return this.theme === 'light' ? '🌒' : '☀️';
    },
    getButtonText() {
      return this.theme === 'light' ? 'switch theme' : 'switch theme';
    },
  },
  mounted() {
    this.getThemePreferenceFromLocalStorage();
  },
  methods: {
    getThemePreferenceFromLocalStorage() {
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
    },
  },
};
</script>
<style lang="scss">
@import url('https://rsms.me/inter/inter.css');
body, html {
  font-family: system-ui, -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Droid Sans", "Helvetica Neue", "Fira Sans", sans-serif;
  display: block;
  font-size: 100%;
  line-height: 1.5;
}

.dark {
  --text-color: #dbdbdb;
  --background: #131829;
  --section-title: #6996a3;
  --header-line: #313d68;
  --link: #78b1bf;
  --link-bg: var(--background);
  --link-hover: #fdcb9e;
}

.light {
  --text-color: #64617b;
  --background: #fff;
  --section-title: #29233e;
  --header-line: #d1c7c1;
  --link: #000;
  --link-bg: #fff;
  --link-hover: #ff8ba7;
}

.main {
  min-height: 100vh;
  background-color: var(--background);
  color: var(--text-color);
}

.sectionTitle {
  margin-bottom: 1em;
  font-family: 'Fira Mono', monospace;
  text-transform: uppercase;
  font-size: .9em;
  letter-spacing: 1px;
  font-weight: normal;
}

.listItem {
  margin: 5px 0 0 0;
  line-height: 2;
  font-size: .9em;
}

hr {
  border-bottom: 1px dashed var(--hr-line);
}

header {
  border-bottom: 1px dashed var(--header-line);
}

.sectionTitle {
  color: var(--section-title);
}

.blogDate {
  color: var(--blog-date);
}

.blogItem {
  border-bottom: 1px solid var(--blog-item-line);
}

a, a:visited, a:active {
  color: var(--link);
  background-color: var(--link-bg);
}

a:hover {
  color: var(--link-hover);
}

header {
  padding: 2em 2.5em;
  min-height: 100px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  @media (min-width: 1100px) {
    padding: 2em 5em 2em 5em;
    justify-content: space-between;
  }
}

.themeSwitch {
  border: 0;
  margin-left: 1em;
  background-color: black;
  color: white;
  font-size: 1.3em;
  padding: 8px 15px 5px 10px;
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
}

.themeSwitchText {
  font-size: .8rem;
  padding-left: 5px;
  margin-top: 4px;
  vertical-align: text-top;
  display: none;
  @media (min-width: 600px) {
    display: inline-block;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a, a:visited, a:active {
  text-decoration: none;
}

hr {
  border: 0;
  margin-bottom: 2.5em;
  background: transparent;
}
</style>
