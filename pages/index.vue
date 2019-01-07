<template>
  <section class="container">
    <card></card>
  </section>
</template>

<script>
  import card from '~/components/card.vue'

  export default {
    components: {
      card
    }
  }
</script>

<style lang="scss">
  @import "../assets/abstracts/mixins";
  @import "../assets/abstracts/variables";
  @import "../assets/base/base";
  @import "../assets/base/helpers";
  @import "../assets/base/typography";
</style>
