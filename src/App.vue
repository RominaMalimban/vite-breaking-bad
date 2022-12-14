<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import CharacterList from './components/CharacterList.vue'

export default {
  components: {
    AppHeader,
    CharacterList
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCharacters() {
      axios
        .get(store.apiUrl)
        .then(res => {
          store.CharacterList = res.data.results;
        })
        .catch(err => {
          console.log("Errori", err)
        });
    }
  }
}
</script>

<template>
  <AppHeader />
  <main>
    <CharacterList />
  </main>

</template>

<style lang="scss">
@use './styles/generals.scss' as*;
@use './styles/partials/variables' as*;

body {
  background-color: $bg-dark-blue;

}
</style>
