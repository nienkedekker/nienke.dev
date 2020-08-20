import path from 'path';
import generatedPosts from './generatedPosts';

const builtAt = new Date().toISOString();

export default {
	mode: 'universal',
	/*
	** Headers of the page
	*/
	head: {
		title: 'Nienke Dekker',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: "Nienke Dekker's personal website" },
			{ name: 'robots', content: 'index, follow' },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:site', content: '@helenasometimes' },
			{ property: 'og:type', content: 'profile' },
			{ property: 'og:updated_time', content: builtAt },
		],
		link: [
			{ rel: 'icon', type: 'image/png', href: '/favicons/favicon-16x16.png', sizes: '16x16' },
			{ rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png', sizes: '32x32' },
			{ rel: 'icon', type: 'image/png', href: '/favicons/android-chrome-192x192.png', sizes: '192x192' },
			{ rel: 'icon', type: 'image/png', href: '/favicons/android-chrome-512x512.png', sizes: '192x192' },
			{ rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-180x180.png', sizes: '180x180' },
			{ rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
		],
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: 'transparent' },
	/*
	** Global CSS
	*/
	css: [],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [],
	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
    '@nuxt/content',
		'@nuxtjs/eslint-module',
	],
	/*
	** Axios module configuration
	** See https://axios.nuxtjs.org/options
	*/
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-dracula.css'
      }
    }
  },
	axios: {},
	generate: {
		routes: [
			'/posts',
		].concat(generatedPosts.map((w) => `/posts/${w}`)),
	},
};
