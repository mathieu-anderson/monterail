<template>
  <section class="container">
    <nuxt-link class="button" to="/all-questions" >
      All questions
    </nuxt-link>
    <nuxt-link class="button" to="/single-question" >
      Single question
    </nuxt-link>
    <nuxt-link class="button" to="/profile" >
      Profile
    </nuxt-link>
  </section>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style scoped>

  .container {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   height: 100vh;
   font-size: 3em;
   line-height: 1em;
  }

  .button{
    border-bottom: 2px solid #FFE1AD;
  }

  .button:hover{
    border-bottom: 2px solid #0266B3;
  }
</style>
