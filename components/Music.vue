<template>
  <section class="music">
    <p v-if="!isEmpty">
      <span v-if="nowPlaying">icon for playing</span>
      <a :href="song.url">{{ song.artist }} - {{ song.title }}</a>
      <span class="songTime">{{ song.songTime }}</span>
    </p>
  </section>
</template>

<script>
export default {
  name: 'Music',
  data: () => {
    return {
      isEmpty: true, // avoid FOUC
      nowPlaying: false,
      song: {
        artist: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
        songTime: {
          type: String,
        }
      }
    }
  },
  mounted() {
    this.fetchSongInformation();
  },
  methods: {
    async fetchSongInformation() {
      try {
        const data = await this.$axios.$get('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=shinyhats&api_key=54f8f15133336606e882fdf20148d123&limit=2&extended=1&format=json');
        const currentTrack = data.recenttracks.track[0];
        this.song.artist = currentTrack.artist.name;
        this.song.title = currentTrack.name;
        this.song.url = currentTrack.url;
        this.song.songTime =
          typeof currentTrack.date === 'undefined'
            ? this.playingLive()
            : this.calculateDate(new Date().getTime() / 1000 - currentTrack.date.uts);
        this.isEmpty = false;
      } catch (error) {
        // swallow error
      }
    },
    playingLive() {
      this.nowPlaying = true;
      return 'now playing';
    },
    calculateDate(secAgo) {
      let agoString, agoRange, agoScaled;
      if (secAgo >= (agoRange = 60 * 60 * 24)) {
        agoString = `${(agoScaled = Math.floor(secAgo / agoRange))} ${(agoScaled > 1 ? 'days' : 'day')} ago`
      } else if (secAgo >= (agoRange = 60 * 60)) {
        agoString = `${(agoScaled = Math.floor(secAgo / agoRange))}  ${(agoScaled > 1 ? 'hours' : 'hour')} ago`
      } else if (secAgo >= (agoRange = 60)) {
        agoString = `${(agoScaled = Math.floor(secAgo / agoRange))} ${(agoScaled > 1 ? 'minutes' : 'minute')} ago`
      } else if (secAgo >= -60) {
        agoString = 'listened just now';
      } else {
        agoString = 'soon'; // if this happens..something is very wrong
      }
      return agoString;
    },
  },
}
</script>

<style lang="scss" scoped>
.music {
  grid-area: music;
  min-height: 50px;
}
.songTime {
  font-style: italic;
}
</style>
