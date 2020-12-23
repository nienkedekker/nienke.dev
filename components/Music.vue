<template>
  <section class="music">
    <span v-if="$fetchState.pending"></span>
    <span v-else-if="$fetchState.error"></span>
    <span v-else>
      <time>{{ song.songTime }}</time>
      <a :href="song.url"> {{ song.artist }} - {{ song.title }}</a>
    </span>
  </section>
</template>

<script>
export default {
  data() {
    return {
      song: {
        artist: {
          type: String,
          required: true
        },
        title: {
          type: String,
          required: true
        },
        url: {
          type: String,
          required: true
        },
        songTime: {
          type: String
        }
      }
    };
  },
  async fetch() {
    const data = await fetch(
      "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=shinyhats&api_key=54f8f15133336606e882fdf20148d123&limit=2&extended=1&format=json"
    ).then(res => res.json());
    const currentTrack = data.recenttracks.track[0];
    this.song.artist = currentTrack.artist.name;
    this.song.title = currentTrack.name;
    this.song.url = currentTrack.url;
    this.song.songTime =
      typeof currentTrack.date === "undefined"
        ? "now playing"
        : "last listened to";
  },
  fetchOnServer: false
};
</script>

<style lang="scss" scoped>
.music {
  display: flex;
  margin-left: 15px;
  text-transform: uppercase;
  font-size: 0.8em;
  letter-spacing: 1px;
  font-weight: 500;

  time {
    margin-right: 10px;
  }
}
</style>
