<template>
  <div>
    <AppHeader/>
    <div class="container">
      ALL QUESTIONS
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
@import '../assets/css/main.scss';

.container {
  padding-top: 25vh;
  background-color: $gray;
  margin: 0 3em 5em 3em;
}
</style>
