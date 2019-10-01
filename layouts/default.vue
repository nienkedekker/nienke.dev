<template>
  <main :class="theme">
    <button
      class="themeSwitch"
      @click="switchTheme"
    >
      {{ getCorrectEmoji }} <span class="themeSwitchText"> {{ getButtonText }} </span>
    </button>
    <nuxt />
  </main>
</template>
<script>
export default {
  data: () => ({
      theme: 'dark',
    }),
  computed: {
    getCorrectEmoji() {
      return this.theme === 'light' ? '🌒' : '🌔';
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
@import '../assets/variables.scss';
body, html {
  font-family: system-ui, -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Droid Sans", "Helvetica Neue", "Fira Sans", sans-serif;
  display: block;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5;
  background: black;

  .light {
    background-color: $light_bg-color;
    color: $light_font-color;

    a, a:visited, a:active {
      color: $light_link-color;
      background-color: $light_link-color-bg;
      border-bottom: 1px solid rgba($light_link-color, 0.2);
    }

    a:hover {
      color: $light_link-color-hover;
    }
  }

  .dark {
    background-color: $dark_bg-color;
    color: $dark_font-color;

    a, a:visited, a:active {
      color: $dark_link-color;
      background-color: $dark_link-color-bg;
			text-decoration: none;
			background-image: linear-gradient(currentColor, currentColor);
			background-position: 0 100%;
			background-repeat: no-repeat;
			background-size: 0 1px;
			transition: background-size cubic-bezier(0,.25,.5,1) 0.4s;
    }

    a:hover {
      color: $dark_link-color-hover;
			//border-bottom: 1px solid rgba($dark_link-color, 0.6);
			text-decoration: none;
			background-size: 100% 1px;
		}

  }
}

.themeSwitch {
  position: absolute;
  top: 1em;
  right: 1.5em;
  border: 0;
  margin: 0;
  background-color: #05131e;
  color: white;
  font-size: 1.3em;
  padding: 8px 15px 5px 10px;
  border-radius: 6px;
  cursor: pointer;
}

.themeSwitchText {
  font-size: .8rem;
  padding-left: 5px;
  margin-top: 4px;
  display: inline-block;
  vertical-align: text-top;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

li, ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a, a:visited, a:active {
  text-decoration: none;
}
</style>
