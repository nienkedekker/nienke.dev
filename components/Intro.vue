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
      <a href="https://nos.nl">NOS</a>, focusing on creating clean, compliant and performant code.
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
	font-family: 'Playfair Display', serif;
}

.introParagraph {
  font-size: 1.4em;
	opacity: 0.8;
}
</style>
