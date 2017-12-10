<template>
  <div class="has-text-centered box">
    <h1 class="title">Incorrect answer, you lost!</h1>
    <h2 class="subtitle">
      Correct answer: ~~answer~~
    </h2>
    <hr>
    <div class="columns">
      <div class="column">
        <button @click="restartGame" class="button is-fullwidth">
          Try again
        </button>
      </div>
      <div class="column">
        <router-link :to="{name: 'intro'}" class="button is-fullwidth">
          Main menu
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { STATUSES } from '../common/const'
export default {
  methods: {
    restartGame: function () {
      this.$store.dispatch('startGame').then(result => {
        if (result === STATUSES.PLAYING) {
          this.$router.push({name: 'play'})
        }
      })
    }
  }
}
</script>
