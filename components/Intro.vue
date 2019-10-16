<template>
  <section class="intro">
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
      Some technologies I've recently worked with are Vue, Node, TypeScript, and the JAMstack.
      I'm also interested in domain driven design principles and patterns and how they can be applied to frontend software engineering.
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
}

.introHeader {
	font-size: 3em;
	font-weight: 400;
	font-family: 'Inter', sans-serif;
}

.introParagraph {
  font-size: 1.5em;
	opacity: 0.8;
}

.introParagraphSmall {
	font-size: .9em;
	line-height: 2;
	opacity: 0.8;
	padding: 1em 0;
	max-width: 500px;
}
</style>
