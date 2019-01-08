<template>
  <a :href="href" class="label">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: 'vLabel',
    props: {
      href: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/abstracts/mixins";
  @import "../assets/abstracts/variables";
  @import "../assets/components/label";
</style>
