<template>
  <div class="has-text-centered box">
    <h1 class="title">Congratulations, you won!</h1>
    <h1 class="title ">Your reward: ~~reward~~</h1>
    <hr>
    <div class="columns">
      <div class="column">
        <router-link :to="{name: 'play'}" class="button is-fullwidth">
          Restart
        </router-link>
      </div>
      <div class="column">
        <router-link :to="{name: 'intro'}" class="button is-fullwidth">
          Main menu
        </router-link>
      </div>
    </div>
  </div>
</template>
