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

