<template>
  <article class="post-content">
    <vue-markdown>{{blog.content}}</vue-markdown>
  </article>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import 'highlightjs/styles/androidstudio.css'

  export default {
    name: 'vDetail',
    layout: 'main',
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
    fetch({ store, params: { id }, app }) {
      store.dispatch('blog/getBlogById', {
        id, store, $axios: app.$axios
      })
    }
  }
</script>
