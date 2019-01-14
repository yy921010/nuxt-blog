<template>
  <div class="post-card" @click="showMore(blogCard)">
    <span class="post-card__label">
      <v-label :href="label.url" v-for="(label,index) in labels" :key="index"
               v-if="labels.length>0">{{label.title}}</v-label>
    </span>
    <a :href="blogCard.url">
      <figure class="post-card__thumb">
        <img :src="blogCard.cover"
             class="blur lazyloaded" :alt="blogCard.cover">
        <noscript>
          <img :src="blogCard.cover"
               :alt="blogCard.cover"></noscript>
      </figure>
    </a>
    <a class="post-card__inner" :href="blogCard.url">
      <div class="post-card__header">
        <h2>{{blogCard.title}}</h2>
        <span class="post-card__meta">
          <time>{{blogCard.date}}</time>
        </span>
      </div>
      <p>{{blogCard.abstract}}</p>
    </a>
  </div>
</template>

<script>
  import vLabel from './label'

  export default {
    name: 'card',
    components: {
      vLabel
    },
    props: {
      blogCard: {
        type: Object,
        default() {
          return {
            title: '',
            abstract: '',
            updateTime: '',
            cover: '',
            url: ''
          }
        }
      },
      labels: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      showMore(blogCard) {
        this.$emit('onDetail', blogCard)
      }
    }
  }
</script>

