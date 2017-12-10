<template>
  <div class="c-main-container container is-widescreen">
    <router-view></router-view>
  </div>
</template>


<script>
  import IntroView from './components/IntroView'
  import router from './router'

  export default {
    name: 'app',
    components: { IntroView },
    router
  }
</script>

<style lang="scss">
  @import 'assets/vendor';
  @import 'assets/common';

  html, body {
    height: 100%;
    overflow: auto;
  }
  body {
    background-image: url('/static/money-dark-optimized.png');
    background-size: cover;
  }
  .c-main-container {
    padding: 20px;
  }

  // for transitions

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
</style>
