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
@import '../assets/variables.scss';
@import url('https://rsms.me/inter/inter.css');

body, html {
  font-family: system-ui, -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Droid Sans", "Helvetica Neue", "Fira Sans", sans-serif;
  display: block;
  font-size: 100%;
  line-height: 1.5;

	.main {
		min-height: 100vh;
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

  .light {
    background-color: $light_bg-color;
    color: $light_font-color;

    hr {
      border-bottom: 1px dashed $light_font-color;
    }

		header {
			border-bottom: 1px solid $light_header-border;
		}

		.sectionTitle {
      color: $light_title-color;
    }

    .blogDate {
      color: $light_item-date;
    }

    .blogItem {
      border-bottom: 1px solid $light-item-border-bottom;
    }

    a, a:visited, a:active {
      color: $light_link-color;
      background-color: $light_link-color-bg;
    }

    a:hover {
      color: $light_link-color-hover;
    }
  }

  .dark {
    background-color: $dark_bg-color;
    color: $dark_font-color;

		header {
			border-bottom: 1px solid $dark_header-border;
		}

    hr {
      border-bottom: 1px dashed $dark_font-color;
    }

    .sectionTitle {
      color: $dark_title-color;
    }

    .blogItem {
      border-bottom: 1px solid $dark-item-border-bottom;
    }

    .blogDate {
      color: $dark_item-date;
    }

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
      text-decoration: none;
      background-size: 100% 1px;
    }
  }
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
  background-color: #05131e;
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
