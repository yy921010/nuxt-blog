<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <a class="header__logo">
            <div class="header__logo--container">
            </div>
          </a>
          <nav class="header__links">
            <div class="container header__links-wrapper">
              <a class="header__link" v-for="(menu,index) in menus" :key="index" :href="menu.url">
                <span>{{menu.title}}</span>
              </a>
            </div>
          </nav>
          <div class="header__toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
    <div class="hero lazyloaded"
         style="background-image: url()">
      <div class="hero__wrap"><h1 class="hero__title">{{title}}</h1>
        <p class="hero__meta">Modern Jekyll theme focused on speed performance &amp; SEO best practices</p></div>
    </div>
    <nuxt/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        menus: [
          {
            url: '',
            title: 'Home'
          },
          {
            url: '',
            title: 'About'
          },
          {
            url: '',
            title: 'Contact'
          }
        ]
      }
    },
    computed: {
      ...mapState('title', {
        title: s => s.title
      })
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/abstracts/mixins";
  @import "../assets/abstracts/variables";
  @import "../assets/layout/grid";
  @import "../assets/layout/nav";
  @import "../assets/pages/page";

</style>
