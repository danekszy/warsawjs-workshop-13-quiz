<template>
  <play-layout>
    <div slot="titleSlot">
      <h1 class="title">Currently won: <strong>{{accumulatedReward | currency}}</strong></h1>
      <h2 class="subtitle">Round {{currentQuestionNumber + 1}} of {{maxQuestions}}</h2>
    </div>
    <game v-if="!!currentQuestion" :question="currentQuestion" @answered="pickAnswer" :key="currentQuestionNumber" slot="gameSlot"></game>
    <questions-bar :questions="questions.reverse()" slot="questionsSlot"></questions-bar>
  </play-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import { STATUSES } from '../common/const'
import Game from './Game'
import QuestionsBar from './QuestionsBar'
import PlayLayout from './PlayLayout'

export default {
  components: { Game, QuestionsBar, PlayLayout },
  created () {
    this.$store.dispatch('initGame')
  },
  computed: mapGetters({
    accumulatedReward: 'cash',
    currentQuestionNumber: 'questionNumber',
    currentQuestion: 'currentQuestion',
    maxQuestions: 'maxQuestions',
    questions: 'questions'
  }),
  methods: {
    pickAnswer: function (index) {
      this.$store.dispatch('pickAnswer', index).then(result => {
        if (result === STATUSES.WON) {
          this.$router.push({name: 'won'})
        } else if (result === STATUSES.LOST) {
          this.$router.push({name: 'lost'})
        }
      })
    }
  }
}
</script>
