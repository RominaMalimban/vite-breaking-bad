<script>
import { createApp } from 'vue';
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: createApp,
  components: {

  }
}
</script>

<template>

  <HelloWorld msg="Vite + Vue" />
</template>

<style lang="scss">
@use './styles/generals.scss';
@use './styles/partials/variables';
</style>
