<template>
  <section class="intro">
    <p>
      My name is Nienke Dekker, and I'm a frontend developer from Amsterdam. I sometimes organize things, like the
      <a href="https://www.stupidhackathon.wtf">Stupid Hackathon Amsterdam</a>. I work at the
      <a href="https://nos.nl">NOS</a>, focusing on creating clean, compliant and performant code.
    </p>
  </section>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style lang="scss" scoped>
.intro {
  grid-area: intro;
}

p {
  font-size: 1.8em;
}
</style>
