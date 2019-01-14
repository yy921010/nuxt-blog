<template>
  <main class="site__content">
    <section class="blog">
      <div class="container">
        <div class="post-list" v-if="blogs.length>0">
          <card v-for="(blog,index) in blogs" :key="index" :blogCard="blog" :labels="blog.tags"
                @onDetail="showDetail"></card>
        </div>
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
      store.commit('title/setHeader', {
        title: '23.9K | Vineo',
        subtitle: '生活不止眼前的苟且，还有诗和远方的田野',
        backgroundUrl: 'https://janczizikow.github.io//sleek/assets/img/posts/sleek_lg.jpg'
      })
    },
    methods: {
      showDetail(blog) {
        this.$router.push(`/detail/${blog._id}`)
      }
    }
  }
</script>

