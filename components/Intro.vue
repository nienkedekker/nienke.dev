<template>
  <section class="intro">
    <div class="wrapper">
      <div>
        <picture>
          <source
            media="(max-width: 759px)"
            srcset="../static/moi-landscape.jpg"
          />
          <source media="(min-width: 760px)" srcset="../static/moi.jpg" />
          <img
            src="../static/moi.jpg"
            alt="Nienke sitting in a restaurant"
            class="image"
          />
        </picture>
      </div>
      <div class="text">
        <h1>
          Hi, I'm Nienke.
        </h1>
        <p>
          I'm a software developer from Amsterdam. I work at
          <a href="https://confrere.com">Confrere</a>, focusing on WebRTC,
          accessibility, and anything else that strikes my fancy.
        </p>
        <p>
          You can find me on
          <a href="https://twitter.com/helenasometimes">Twitter</a> or
          <a href="https://github.com/nienkedekker">GitHub</a>.
        </p>
        <p>
          My forever sideproject is <a href="https://what.pm">what.pm</a>. I
          very sporadically write <NuxtLink to="/posts">blog posts</NuxtLink>.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Intro"
};
</script>

<style lang="scss" scoped>
.intro {
  display: flex;

  @media (min-width: 760px) {
    flex-direction: column;
  }
}

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 760px) {
    flex-direction: row;
  }
}

.text {
  @media (min-width: 760px) {
    margin-left: 2em;
  }
}

p {
  font-size: 1em;
  margin-bottom: 1em;
}

h1 {
  font-size: 2em;
  font-weight: 400;
  margin: 0;
  padding: 0;
  line-height: 1.6;
  font-family: "Inter", sans-serif;

  @media (min-width: 760px) {
    font-size: 3em;
  }
}

.image {
  border-radius: 10px;
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2em;
  @media (min-width: 760px) {
    max-width: 220px;
    margin-bottom: 0;
  }
}
</style>
