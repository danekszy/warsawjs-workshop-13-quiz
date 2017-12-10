import Vue from 'vue'
import Vuex from 'vuex'
import { STATUSES, REWARDS } from './common/const'
import { getQuestions } from './common/api'
Vue.use(Vuex)

const initialState = {
  currentQuestionNumber: 0,
  cash: 0,
  rawQuestions: [],
  status: STATUSES.NOT_STARTED
}

// NOT_STARTED: 'not started',
// PLAYING: 'playing',
// LOST: 'lost',
// WON: 'won'

// dobijanie sie do stanu zazwyczaj poprzez gettery
const getters = {
  rawQuestions: state => state.rawQuestions,
  cash: state => state.cash,
  questionNumber: state => state.currentQuestionNumber,
  currentQuestion: state => getters.questions(state)[state.currentQuestionNumber] || null,
  status: state => state.status,
  maxQuestions: state => state.rawQuestions.length,
  questions: state => state.rawQuestions.map((question, index) => ({
    ...question,
    reward: REWARDS[index],
    isAnswered: index < state.currentQuestionNumber
  }))
}

const mutations = {
  nextQuestion (state) {
    state.currentQuestionNumber += 1
  },
  addReward (state, reward) {
    state.cash += reward
  },
  loadQuestions (state, questions) {
    state.rawQuestions = questions
  },
  setStatus: function (state, status) {
    state.status = status
  }
}

const actions = {
  pickAnswer: function ({ commit, state }, index) {
    if (getters.currentQuestion(state).correctAnswer === index) {
      if (getters.questionNumber(state) + 1 < getters.maxQuestions(state)) {
        commit('addReward', getters.currentQuestion(state).reward)
        commit('nextQuestion')
      } else {
        commit('setStatus', STATUSES.WON)
        return STATUSES.WON
      }
    } else {
      commit('setStatus', STATUSES.LOST)
      return STATUSES.LOST
    }
    return STATUSES.PLAYING
  },
  initGame: function ({ commit }) {
    getQuestions(10).then((response) => commit('loadQuestions', response))
  },
  startGame: function ({ commit }) {
    commit('setStatus', STATUSES.PLAYING)
    return STATUSES.PLAYING
  }
}

export default new Vuex.Store({
  state: initialState,
  getters,
  mutations,
  actions
})
