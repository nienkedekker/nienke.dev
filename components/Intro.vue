<template>
  <section class="intro">
    🚧 I'M REDOING THIS SITE, if you run into issues do not let me know 😗️💕😃
    <h1 class="introHeader">
      My name is Nienke Dekker,
    </h1>
    <p class="introParagraph">
      and I'm a frontend developer from Amsterdam.
    </p>
    <p class="introParagraph">
      I work at the
      <a href="https://nos.nl">NOS</a>, focusing on creating clean and performant code.
    </p>
    <p class="introParagraphSmall">
      Some technologies I've recently worked with are NextJS, Vue, and Node.
    </p>
  </section>
</template>

<script>
export default {
  name: 'Intro',
};
</script>

<style lang="scss" scoped>
.intro {
  grid-area: intro;
	font-family: 'Inter', sans-serif;
}

.introHeader {
	font-size: 3em;
	font-weight: 400;
}

.introParagraph {
  font-size: 1.5em;
	opacity: 0.8;
}

.introParagraphSmall {
	font-size: 1em;
	line-height: 2;
	padding: 1em 0;
	max-width: 800px;
}
</style>
