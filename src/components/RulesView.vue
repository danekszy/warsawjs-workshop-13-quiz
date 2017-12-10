<template>
  <div class="box has-text-centered">
    <h1 class="title">Rules</h1>
    <section>
      Answer questions until you win! There will be <strong>{{maxQuestions}}</strong> questions.
      Currently selected difficulty is <strong>{{difficulty}}</strong>.
    </section>
    <hr>
    <div class="columns">
      <div class="column">
        <button @click="startGame" class="button is-fullwidth">
          Start game
        </button>
      </div>
      <div class="column">
        <router-link :to="{name: 'settings'}" class="button is-fullwidth">
          Settings
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { STATUSES } from '../common/const'
export default {
  name: 'rules',
  data: () => ({
    difficulty: 'hardest'
  }),
  computed: mapGetters({
    maxQuestions: 'maxQuestions'
  }),
  methods: {
    startGame: function () {
      this.$store.dispatch('startGame').then(result => {
        if (result === STATUSES.PLAYING) {
          this.$router.push({name: 'play'})
        }
      })
    }
  }
}
</script>
