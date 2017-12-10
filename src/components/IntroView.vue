<template>
  <div class="c-main-container container is-widescreen">
    <div class="columns">
      <div class="column is-offset-4 is-4 box has-text-centered">
        <h1 class="title">Who Wants To Be a Milionaire?</h1>
        <div>
          <img src="/static/logo.png">
        </div>
        <router-link class="button is-fullwidth" :to="{name: 'rules'}">PLAY</router-link>
      </div>
    </div>
  </div>
</template>
