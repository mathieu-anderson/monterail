<template lang="html">
  <section class="question">
    <div class="portrait">
    </div>
    <div class="question">
    </div>
    <div class="asked">
    </div>
    <div class="answers">
    </div>
    <div class="info">
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/css/main.scss';

.question {
  background-color: $light-blue;
  margin: -1em 11em 0em 11em;
  padding: 2em 0em 3em 0em;
  display: grid;
  grid-template-columns: [col1start] 12.5% [col2start] 1fr [col3start] 25% [col3end];
  grid-template-rows: [row1] 25vh [row2] 25vh;
}

</style>
