<template>
  <div>
    <vHeader></vHeader>
    <nuxt/>
    <vFooter></vFooter>
  </div>
</template>

<script>
  import vLabel from '../components/label'
  import vFooter from '../layouts/footer'
  import vHeader from '../layouts/header'

  export default {
    components: {
      vLabel,
      vFooter,
      vHeader
    }
  }
</script>

<style lang="scss">
  @charset "UTF-8";

  // 1. Configuration and helpers
  @import
  "../assets/abstracts/variables",
  "../assets/abstracts/mixins";

  // 2. Vendors
  @import
  "../assets/vendor/normalize";

  // 3. Base
  @import
  "../assets/base/base",
  "../assets/base/typography",
  "../assets/base/helpers";

  // 4. Layout
  @import
  "../assets/layout/grid",
  "../assets/layout/nav",
  "../assets/layout/footer";

  // 5. Components
  @import
  "../assets/components/btn",
  "../assets/components/card",
  "../assets/components/label",
  "../assets/components/pagination",
  "../assets/components/form",
  "../assets/components/modal",
  "../assets/components/table",
  "../assets/components/syntax";

  // 6. Page-specific styles
  @import
  "../assets/pages/page",
  "../assets/pages/post";

</style>
