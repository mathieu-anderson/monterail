<template>
  <div>
    <AppHeader/>
    <div class="container">
      <question/>
      <question/>
      <question/>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import Question from '../components/question.vue'

export default {
  components: {
    AppHeader,
    Question
  }
}
</script>

<style lang="scss">
@import '../assets/css/main.scss';

.container {
  padding-top: 25vh;
  background-color: $gray;
  margin: 0em 3em 5em 3em;
}
</style>
