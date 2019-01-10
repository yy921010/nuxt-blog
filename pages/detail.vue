<template>
  <article class="post-content">
    <markdown>{{blog}}</markdown>
  </article>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import markdown from '~/components/markdown.vue'

  export default {
    name: 'vDetail',
    layout: 'main',
    components: {
      markdown
    },
    computed: {
      ...mapState('blog', {
        blog: s => s.currentBlog
      })
    },
    methods: {
      ...mapActions('blog', {
        getBlogById: 'getBlogById'
      })
    },
    fetch({ store, params: { id } }) {
      store.dispatch('blog/getBlogById', { id, store })
    }
  }
</script>

