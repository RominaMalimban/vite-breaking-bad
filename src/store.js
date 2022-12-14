import { reactive } from 'vue';

export const store = reactive({
    characterList: [],
    apiUrl: "https://www.breakingbadapi.com/api/characters"

});