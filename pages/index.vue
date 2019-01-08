<template>
  <main class="site__content">
    <section class="container">
      <div class="post-list" v-if="blogs.length>0">
        <card v-for="(blog,index) in blogs" :key="index" :blogCard="blog" :labels="blog.tags"></card>
      </div>
    </section>
  </main>
</template>

<script>
  import card from '~/components/card.vue'
  import { mapState, mapActions } from 'vuex'

  export default {
    layout: 'main',
    components: {
      card
    },
    computed: {
      ...mapState('blog', {
        blogs: s => s.blogs
      })
    },

    async fetch({ store, app }) {
      store.dispatch('blog/getBlog', { $axios: app.$axios })
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
