<script>
import { store } from '../store.js';
import CardCharacter from './CardCharacter.vue';

export default {
    name: "CharacterList",
    components: {
        CardCharacter
    },
    data() {
        return {
            store
        };
    }
};
</script>

<template>
    <section>
        <div class="container">

            <!-- tasto select -->
            <select name="category" id="category" v-model="store.searchStatus" @click="$emit('performSearch')">
                <option value="choice">Select Status</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>

            <div class="wrapper">
                <!-- div risultati -->
                <div class="result">
                    Find {{ store.characterList.length }} characters
                </div>

                <!-- contenitore padre che contiene singola card -->
                <div class="cards">

                    <!-- card -->
                    <CardCharacter v-for="character in store.characterList" :key="character.id" :info="character" />

                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

section {
    margin-top: 37px;

    .container {

        select {
            padding: 8px 10px;
        }

        .wrapper {
            background-color: $white;
            padding: 40px;
            margin-top: 30px;

            .result {
                color: $white;
                background-color: $bg-dark;
                padding: 10px;
                font-weight: bolder;
            }

            .cards {
                display: flex;
                flex-wrap: wrap;
                margin: 20px -15px;
                text-align: center;
            }
        }
    }
}
</style>