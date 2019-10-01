<template>
  <section class="music">
    <p v-if="!isEmpty">
      <svg
        class="svg"
        :class="[nowPlaying ? 'playing' : '']"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 55 55"
      ><path d="M52.66.249a1.012 1.012 0 0 0-.789-.241l-31 4.011A1 1 0 0 0 20 5.01v35.613C18.174 38.428 15.273 37 12 37c-5.514 0-10 4.037-10 9s4.486 9 10 9 10-4.037 10-9c0-.232-.019-.46-.039-.687.013-.065.039-.124.039-.192V16.118l29-3.753v18.257C49.174 28.428 46.273 27 43 27c-5.514 0-10 4.037-10 9s4.486 9 10 9c5.464 0 9.913-3.966 9.993-8.867 0-.013.007-.024.007-.037V1a.998.998 0 0 0-.34-.751zM12 53c-4.411 0-8-3.141-8-7s3.589-7 8-7 8 3.141 8 7-3.589 7-8 7zm31-10c-4.411 0-8-3.141-8-7s3.589-7 8-7 8 3.141 8 7-3.589 7-8 7zM22 14.101V5.889l29-3.752V10.348l-29 3.753z" />
      </svg>
      <a :href="song.url">{{ song.artist }} - {{ song.title }}</a>
      <span class="songTime">{{ song.songTime }}</span>
    </p>
  </section>
</template>

<script>
export default {
  name: 'Music',
  data: () => ({
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
        },
      },
    }),
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
        this.song.songTime = typeof currentTrack.date === 'undefined'
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
      let agoString;
      let agoRange;
      let agoScaled;
      if (secAgo >= (agoRange = 60 * 60 * 24)) {
        agoString = `listened to this ${(agoScaled = Math.floor(secAgo / agoRange))} ${(agoScaled > 1 ? 'days' : 'day')} ago`;
      } else if (secAgo >= (agoRange = 60 * 60)) {
        agoString = `listened to this ${(agoScaled = Math.floor(secAgo / agoRange))}  ${(agoScaled > 1 ? 'hours' : 'hour')} ago`;
      } else if (secAgo >= (agoRange = 60)) {
        agoString = `listened to this ${(agoScaled = Math.floor(secAgo / agoRange))} ${(agoScaled > 1 ? 'minutes' : 'minute')} ago`;
      } else if (secAgo >= -60) {
        agoString = 'listened just now';
      } else {
        agoString = 'soon'; // if this happens..something is very wrong
      }
      return agoString;
    },
  },
};
</script>

<style lang="scss" scoped>
.music {
  grid-area: music;
  min-height: 2em;
  margin-top: .5em;
	margin-bottom: 2em;
}

a, a:visited, a:active {
  background-color: transparent;
  border-bottom: 0;
}

.songTime {
  font-style: italic;
  margin-left: 5px;
  font-size: .8em;
}

.svg {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  vertical-align: text-top;
  fill: currentColor;
}

.playing {
  animation-name: wiggle;
  animation-duration: 1500ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
}

@keyframes wiggle {
  0% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(-10deg);
  }
}
</style>
