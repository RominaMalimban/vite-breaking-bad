<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import CharacterList from './components/CharacterList.vue';
import Loader from './components/Loader.vue';

export default {
  components: {
    AppHeader,
    CharacterList,
    Loader
  },
  data() {
    return {
      store,
      loading: true,
    }
  },
  methods: {
    getCharacters() {

      // salvo in una variabile l'endpoint dell'api
      let myUrl = store.apiUrl;

      // creo condizioni:
      if (store.searchStatus === "alive" || store.searchStatus === "dead" || store.searchStatus === "unknown") {
        myUrl += `?${store.apiStatusParameter}=${store.searchStatus}`
      }

      axios
        .get(myUrl)
        .then(res => {
          store.characterList = res.data.results;
          // imposto la variabile loading su false una volta che i dati sono stati caricati:
          this.loading = false;
        })
        .catch(err => {
          console.log("Errori", err)
        });
    },
  },
  mounted() {
    this.getCharacters();
  }
}
</script>

<template>
  <Loader v-if="loading" />
  <AppHeader />
  <main>
    <CharacterList @performSearch="getCharacters" />
  </main>

</template>

<style lang="scss">
@use './styles/generals.scss' as*;
@use './styles/partials/variables' as*;

body {
  background-color: $bg-dark-blue;
}
</style>
