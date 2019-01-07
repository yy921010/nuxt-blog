<template>
  <div class="post-card">
    <span class="post-card__label">
      <v-label>Guides</v-label>
    </span>
    <a href="/sleek/markdown-cheatsheet/">
      <figure class="post-card__thumb"><img
        src="https://janczizikow.github.io//sleek/assets/img/posts/emile-perron-190221_placehold.jpg"
        data-srcset="https://janczizikow.github.io//sleek/assets/img/posts/emile-perron-190221_thumb.jpg, https://janczizikow.github.io//sleek/assets/img/posts/emile-perron-190221_thumb@2x.jpg 2x"
        class="blur lazyloaded" alt="Markdown Cheatsheet"
        srcset="https://janczizikow.github.io//sleek/assets/img/posts/emile-perron-190221_thumb.jpg, https://janczizikow.github.io//sleek/assets/img/posts/emile-perron-190221_thumb@2x.jpg 2x">
        <noscript><img src="https://janczizikow.github.io//sleek/assets/img/posts/emile-perron-190221_thumb.jpg"
                       alt="Markdown Cheatsheet"></noscript>
      </figure>
    </a>
    <a class="post-card__inner" href="/sleek/markdown-cheatsheet/">
      <div class="post-card__header"><h2>Markdown Cheatsheet</h2><span class="post-card__meta"> <time>Oct 15, 2017</time> </span>
      </div>
      <p>Markdown is a way to style text on the web. You control the display of the document; formating words as...</p>
    </a>
  </div>
</template>

<script>
  import vLabel from './label'

  export default {
    name: 'card',
    components: {
      vLabel
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/abstracts/mixins";
  @import "../assets/abstracts/variables";

  .post-card {
    display: block;
    position: relative;
    width: 100%;
    min-height: 250px;
    border-radius: 4px;
    overflow: hidden;
    background-color: $bg-color;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    margin-bottom: 2.25rem; // don't use % value see more: https://github.com/philipwalton/flexbugs/issues/86
    border-bottom: 0;
    transition: box-shadow .25s ease;

    &:hover,
    &:focus {
      border-bottom: 0;
      box-shadow: 0 2px 40px 0 hsla(232, 8%, 63%, .3);
    }

    @include breakpoint($md) {
      width: 48.4375%;
      margin-right: 3.125%;

      &:last-of-type,
      &:nth-child(2n+2) {
        margin-right: 0;
      }
    }

    @include breakpoint($xl) {
      width: 31.25%;
      margin-right: 3.125%;

      &:nth-child(2n+2) {
        margin-right: 3.125%;
      }

      &:last-of-type,
      &:nth-child(3n+3) {
        margin-right: 0;
      }
    }

    &__label {
      position: absolute;
      top: 1.5rem;
      left: 1.5rem;
      z-index: 2;
    }

    &__inner {
      display: block;
      position: relative;
      padding: 1.875rem 1.25rem 0.625rem;
      width: 100%;
      color: $grey;
      border-bottom: 0;

      &:focus,
      &:hover {
        color: $grey;
        border-bottom: 0;
      }
    }

    &__header {
      margin-bottom: 0.75rem;
    }

    &__meta {
      font-size: 0.875rem;
    }
  }

  .post-card__thumb {
    margin: 0;
    background: $bg-color;
    position: relative;
    overflow: hidden;

    &::after {
      content: "";
      display: block;
      height: 0;
      width: 100%;
      // 16:9 = 56.25% = calc(9 / 16 * 100%)
      padding-bottom: 56.25%;
    }

    > * {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
    }
  }
</style>
