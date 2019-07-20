<template>
  <section class="music">
    <a :href="music.url">{{ music.artist }} - {{ music.title }}</a>
    <span v-if="music.nowPlaying">now playing!</span>
  </section>
</template>

<script>
export default {
  name: 'Music',
  data: function () {
    return {
      music: {
        artist: {
          type: String
        },
        title: {
          type: String,
        },
        url: {
          type: String,
        },
        nowPlaying: {
          type: Boolean,
        }
      }
    }
  },
  mounted() {
    this.fetchMusicInformation();
  },
  methods: {
    async fetchMusicInformation() {
      const data = await this.$axios.$get('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=shinyhats&api_key=54f8f15133336606e882fdf20148d123&limit=2&extended=1&format=json');
      const currentTrack = data.recenttracks.track[0];
      this.music.artist = currentTrack.artist.name;
      this.music.title = currentTrack.name;
      this.music.url = currentTrack.url;
      this.music.nowPlaying = currentTrack['@attr'].nowplaying;
    }
  }
}
</script>

<style lang="scss" scoped>
.music {
  grid-area: music;
}
</style>
