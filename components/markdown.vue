<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  import markdownIt from 'markdown-it'
  import markdownItAbbr from 'markdown-it-abbr'
  import markdownItEmoji from 'markdown-it-emoji'
  import markdownItFootnote from 'markdown-it-footnote'
  import markdownItIns from 'markdown-it-ins'
  import markdownItSub from 'markdown-it-sub'
  import markdownItSup from 'markdown-it-sup'

  export default {
    name: 'markdown',
    mounted(){
      //this.$slot
    }
  }
</script>

<style scoped>

</style>
