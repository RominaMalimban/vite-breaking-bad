import { reactive } from 'vue';

export const store = reactive({
    characterList: [],
    apiUrl: "https://rickandmortyapi.com/api/character",
    searchStatus: "", /* => valore della scelta che farà l'utente */
    apiStatusParameter: "status" /* => parametrizzo il nome della key che passo, quindi status */
});